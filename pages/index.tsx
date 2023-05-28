import Layout from "@/layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Home = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Inventario</title>
        <meta name="description" content="Gestión de inventarios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <h1 className="text-2xl font-bold underline">Hello world!</h1>
        </>
      </Layout>
    </>
  );
};

Home.requireAuth = true;
export default Home;
