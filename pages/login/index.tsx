import LoginBtn from "@/components/auth/LoginBtn";
import React from "react";

const Login = () => (
  <div className="w-max-[800px] flex h-screen items-center justify-center">
    <div className="flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-black">
      <h1 className="p-5 text-4xl font-thin uppercase tracking-[0.3em] w-max-[600px]">
        Sistema de gestión de inventarios
      </h1>
      <div className="">
        <h6 className="mb-5 max-w-xs px-2 text-center text-sm font-thin tracking-[0.25em] text-red-600">
          Página privada
        </h6>
        <h3 className="p-2 uppercase tracking-[0.25em]">Accede a tu cuenta</h3>
        <button
          type="submit"
          className="m-2 mb-5 w-full rounded-lg border-[1px] border-solid border-black bg-black p-2 text-center uppercase tracking-[0.25em] text-white first-letter:rounded-lg hover:bg-white hover:text-black"
        >
          Iniciar sesión
        </button>
        <LoginBtn />
      </div>
    </div>
  </div>
);

export default Login;
