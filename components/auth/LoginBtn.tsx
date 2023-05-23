import { useSession, signIn, signOut } from "next-auth/react";

//Componente de ejemplo para realizar la autenticación con next-auth

const LoginBtn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginBtn;
