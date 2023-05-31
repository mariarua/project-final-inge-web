import Management from "@/components/management";
import ModalMaterials from "@/components/modals/ModalMaterials";
import { GET_MATERIALS } from "@/graphql/client/materials";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

interface Material{
  id: string,
  createdAt:{
    year: string,
    month: string,
    day: string
  },
  name: string,
  price: number,
}

const Materials = () => {
  const [openModalMaterials, setOpenModalMaterials] = useState<boolean>(false);
  const { data, loading, error } = useQuery<{ materials: Material[] }>(GET_MATERIALS, {
    fetchPolicy: 'cache-first',
  });
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (error) return <p>Error materials</p>;

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Management title="Gestión de materiales">
        <>
          <div className="flex justify-end">
            <button onClick={() => (setOpenModalMaterials(true))}>Agregar material</button>
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
              {data?.materials.map((material) => (
                <tr key={material.id}>
                  <td>{material.id}</td>
                  <td>{`${material.createdAt.year}-${material.createdAt.month}-${material.createdAt.day}`}</td>
                  <td>{material.name}</td>
                  <td>{material.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </Management>
      <ModalMaterials openModalMaterials={openModalMaterials} setOpenModalMaterials={setOpenModalMaterials}/>
    </>
  );
};

Materials.requireAuth = true;
export default Materials;
