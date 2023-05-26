import Layout from "@/layouts/Layout";
import Head from "next/head";

const Materials = () => (
  <>
    <Head>
      <title>Materiales</title>
      <meta name="description" content="Gestión de materiales" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <div className="flex items-center flex-col px-[80px] pt-[48px] h-screen gap-[120px]">
        <span className="text-5xl">Gestión de materiales</span>
        <div className="w-full">
          <div className="flex flex-col gap-[40px]">
            <div className="flex justify-end">
              <span className="btn">Agregar material</span>
            </div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Fecha de creación</th>
                  <th>Nombre</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shining Star</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                  <td>1975</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                  <td>1961</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Materials;
