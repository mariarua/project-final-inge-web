import { signIn, useSession } from "next-auth/react";
import Spinner from "@/components/spinner";

const Error401 = () => {
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
      <div className="flex flex-col items-center text-gray-700  justify-center rounded-lg border-[1px] border-solid border-slate-800">
        <h1 className="p-5 text-4xl font-thin text-gray-700 uppercase tracking-[0.3em] w-[600px] text-center">
          Sistema de gestión de inventarios
        </h1>
        <div className="flex flex-col justify-center items-center">
          <h6 className="mb-5 px-2 text-center text-lg uppercase font-thin tracking-[0.25em] text-red-600">
            Página privada
          </h6>
          <h3 className="p-2 text-gray-800 uppercase tracking-[0.25em] text-center">
            Accede a tu cuenta
          </h3>
          <button
            onClick={redirectSession}
            type="submit"
            className="mt-2 mb-5 w-full rounded-lg border-[1px] border-solid border-slate-800 bg-slate-800 p-2 text-center uppercase tracking-[0.25em] text-white first-letter:rounded-lg hover:bg-white hover:text-slate-800"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error401;
