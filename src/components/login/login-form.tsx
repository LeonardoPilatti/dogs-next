'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import { useEffect } from 'react';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>{pending ? 'Enviando...' : 'Entrar'}</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" name="username" />
        <Input label="Senha" name="password" type="password" />
        <FormButton />
        <ErrorMessage error={state.error} />
      </form>
    </>
  );
}
