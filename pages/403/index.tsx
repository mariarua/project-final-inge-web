import Link from "next/link";

const Error403 = () => (
  <div className="w-max-[800px] flex h-screen items-center justify-center">
    <div className="flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-black p-10">
      <h1 className="p-5 text-4xl font-thin uppercase tracking-[0.3em] w-[600px] text-center">
        Sistema de gestión de inventarios
      </h1>
      <h6 className="mb-5 px-2 text-center text-lg uppercase font-thin tracking-[0.25em] text-red-600">
        No esta autorizado para ver esta página
      </h6>
      <Link
        href="/"
        className="m-2 mb-5 w-full rounded-lg border-[1px] border-solid border-black bg-black p-2 text-center uppercase tracking-[0.25em] text-white first-letter:rounded-lg hover:bg-white hover:text-black"
      >
        Volver a la home
      </Link>
    </div>
  </div>
);

export default Error403;
