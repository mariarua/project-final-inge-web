import Management from "@/components/management";
import ModalMaterials from "@/components/modals/ModalMaterials";
import PrivateComponent from "@/components/privateComponent";
import Spinner from "@/components/spinner";

import { GET_MATERIALS } from "@/graphql/client/materials";
import { useQuery } from "@apollo/client";
import { Material } from "@prisma/client";
import { useState } from "react";

const Materials = () => {
  const [openModalMaterials, setOpenModalMaterials] = useState<boolean>(false);

  const { data: materialsData, loading: materialsLoading } = useQuery<{
    materials: Material[];
  }>(GET_MATERIALS, {
    fetchPolicy: "cache-first",
  });

  return (
    <>
      <Management title="Gestión de materiales">
        <div className="flex justify-end">
          <PrivateComponent roles={["ADMIN"]}>
            <button onClick={() => setOpenModalMaterials(true)}>
              Agregar material
            </button>
          </PrivateComponent>
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
            {materialsLoading && (
              <td colSpan={4} className="p-3">
                <Spinner />
              </td>
            )}
            {materialsData?.materials.map((material) => (
              <tr key={material.id}>
                <td>{material.id}</td>
                <td>{new Date(material.createdAt).toLocaleString("es-CO")}</td>
                <td>{material.name}</td>
                <td>{material.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Management>
      <ModalMaterials
        openModalMaterials={openModalMaterials}
        setOpenModalMaterials={setOpenModalMaterials}
      />
    </>
  );
};

Materials.requireAuth = true;
export default Materials;
