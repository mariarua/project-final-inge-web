import Head from "next/head";
import Spinner from "@/components/spinner";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Login from "@/pages/login";

const Home = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/inventario");
  }

  return (
    <>
      <Head>
        <title>Inventario</title>
        <meta name="description" content="Gestión de inventarios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default Home;
