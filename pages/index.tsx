import Layout from "@/layouts/Layout";
import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Inicio</title>
      <meta name="description" content="Sistema de gestión de inventarios" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex items-center flex-col px-[80px] pt-[48px] h-screen gap-[120px]">
        <span className="text-5xl">Sistema de gestión de inventarios</span>        
    </div>
  </>
);

export default Home;
