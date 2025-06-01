'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import login from './login';

export default async function createUser(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const userEmail = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password || !userEmail) {
      throw new Error('Preencha todos os campos');
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter mais de 6 digitos.');
    }

    const { url } = USER_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou usuário já cadastrado.');

    const data = await response.json();
    const { ok } = await login({ ok: true, error: '' }, formData);

    if (!ok) throw new Error('Erro ao fazer login após cadastro.');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
