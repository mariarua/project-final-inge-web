import { signIn, useSession } from "next-auth/react";
import Spinner from "@/components/spinner";

const Login = () => {
  const { status } = useSession();

  const redirectSession = () => {
    signIn("auth0", { redirect: true, callbackUrl: "/usuarios" });
  };

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  return (
    <div className="w-max-[800px] flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-black">
        <h1 className="p-5 text-4xl font-thin uppercase tracking-[0.3em] w-[600px] text-center">
          Sistema de gestión de inventarios
        </h1>
        <div className="mt-12">
          <h3 className="p-2 uppercase tracking-[0.25em] text-center">
            Accede a tu cuenta
          </h3>
          <button
            onClick={redirectSession}
            type="submit"
            className="m-2 mb-5 w-full rounded-lg border-[1px] border-solid border-black bg-black p-2 text-center uppercase tracking-[0.25em] text-white first-letter:rounded-lg hover:bg-white hover:text-black"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
