import { Metadata } from 'next';
import LoginCreateForm from '../../../components/login/login-create-form';

export const metadata: Metadata = {
  title: 'Crie sua conta | Dogs',
  description: 'Página para criar uma nova conta de usuário no site Dogs',
};

export default async function CriarPage() {
  return (
    <main className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCreateForm />
    </main>
  );
}
