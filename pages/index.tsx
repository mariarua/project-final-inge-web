import LoginBtn from "@/components/auth/LoginBtn";
import Layout from "@/layouts/Layout";
import Head from "next/head";

const Home = () => (
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
        <LoginBtn />
      </>
    </Layout>
  </>
);

export default Home;
