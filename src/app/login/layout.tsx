import styles from './login.module.css';

interface ILoginLayout {
  children: React.ReactNode;
}

export default async function LoginLayout({ children }: ILoginLayout) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
