import Management from "@/components/management";
import ModalMovement from "@/components/modals/ModalMovement";
import Spinner from "@/components/spinner";

import { GET_NAME_MATERIALS } from "@/graphql/client/materials";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const movement = [
  { id: "QWERT1", createdAt: "01-05-2023", input: 100, output: null },
  { id: "QWERT2", createdAt: "02-05-2023", input: null, output: 10 },
  { id: "QWERT3", createdAt: "03-05-2023", input: null, output: 10 },
  { id: "QWERT4", createdAt: "04-05-2023", input: null, output: 10 },
  { id: "QWERT5", createdAt: "05-05-2023", input: null, output: 10 },
  { id: "QWERT6", createdAt: "06-05-2023", input: null, output: 10 },
  { id: "QWERT7", createdAt: "07-05-2023", input: null, output: 10 },
  { id: "QWERT8", createdAt: "08-05-2023", input: null, output: 10 },
  { id: "QWERT9", createdAt: "09-05-2023", input: null, output: 10 },
  { id: "QWERT10", createdAt: "10-05-2023", input: null, output: 10 },
  { id: "QWERT11", createdAt: "11-05-2023", input: null, output: 10 },
];

interface Material {
  id: string;
  name: string;
}

const Movement = () => {
  const [openModalMovement, setOpenModalMovement] = useState<boolean>(false);
  const { data, loading, error } = useQuery<{ materials: Material[] }>(
    GET_NAME_MATERIALS,
    {
      fetchPolicy: "cache-first",
    }
  );
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (error) return <p>Error materials</p>;

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );

  return (
    <>
      <Management title="Gestión de inventarios">
        <>
          <div className="flex justify-between">
            <select name="select" id="select">
              <option value="material_0" disabled>
                Seleccionar material
              </option>
              {data?.materials.map((material) => (
                <option key={`material_${material.id}`} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
            <button onClick={() => setOpenModalMovement(true)}>
              Agregar movimiento
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Fecha de creación</th>
                <th>Entrada</th>
                <th>Salida</th>
              </tr>
            </thead>
            <tbody>
              {movement.map((movement) => (
                <tr key={movement.id}>
                  <td>{movement.id}</td>
                  <td>{movement.createdAt}</td>
                  <td>{movement.input}</td>
                  <td>{movement.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex">
            <div className="w-[83%]"></div>
            <span>Saldo: 25</span>
          </div>
        </>
      </Management>
      <ModalMovement
        openModalMovement={openModalMovement}
        setOpenModalMovement={setOpenModalMovement}
      />
    </>
  );
};

Movement.requireAuth = true;
export default Movement;
