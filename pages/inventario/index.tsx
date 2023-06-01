import Management from "@/components/management";
import ModalMovement from "@/components/modals/ModalMovement";
import Spinner from "@/components/spinner";

import { GET_MATERIALS_LIST } from "@/graphql/client/materials";
import { GET_MOVEMENTS } from "@/graphql/client/movements";
import { useQuery } from "@apollo/client";
import { Material, Movement } from "@prisma/client";
import { ChangeEvent, useState } from "react";

const Movements = () => {
  const [openModalMovement, setOpenModalMovement] = useState<boolean>(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>();

  const { data: materialsData } = useQuery<{
    materials: Pick<Material, "id" | "name" | "price">[];
  }>(GET_MATERIALS_LIST, {
    fetchPolicy: "cache-first",
  });

  const { data: movementsData, loading: movementsLoading } = useQuery<{
    movements: Movement[];
  }>(GET_MOVEMENTS, {
    fetchPolicy: "cache-first",
    variables: { material: selectedMaterialId || undefined },
  });

  const handleMaterialChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterialId(event.currentTarget.value);
  };

  const currentMaterial =
    selectedMaterialId &&
    materialsData?.materials.find((item) => item.id === selectedMaterialId);

  return (
    <>
      <Management title="Gestión de inventarios">
        <div className="flex justify-between">
          <select
            name="select"
            id="select"
            onChange={handleMaterialChanged}
            placeholder="Seleccionar material"
            defaultValue=""
            className="bg-slate-800 text-white uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
          >
            <option value="">Todos los materiales</option>
            {materialsData?.materials.map((material) => (
              <option key={`material_${material.id}`} value={material.id}>
                {material.name}
              </option>
            ))}
          </select>
          {currentMaterial && (
            <div className="uppercase tracking-[0.3em] text-slate-800 text-xl flex place-items-end">
              <span>SALDO: {currentMaterial.price}</span>
            </div>
          )}
          <button
            className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg active:bg-white active:border-slate-800 active:text-slate-800"
            onClick={() => setOpenModalMovement(true)}
          >
            Agregar movimiento
          </button>
        </div>
        <table className="rounded-xl">
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Fecha de creación</th>
              <th>Entrada</th>
              <th>Salida</th>
            </tr>
          </thead>
          <tbody>
            {movementsLoading && (
              <td colSpan={4} className="p-3">
                <Spinner />
              </td>
            )}
            {!movementsLoading && !movementsData?.movements.length && (
              <td colSpan={4} className="p-5">
                No hay información para mostrar
              </td>
            )}
            {movementsData?.movements.map((movement) => (
              <tr key={movement.id}>
                <td>{movement.id}</td>
                <td>{new Date(movement.createdAt).toLocaleString("es-CO")}</td>
                <td>{movement.input}</td>
                <td>{movement.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Management>
      <ModalMovement
        openModalMovement={openModalMovement}
        setOpenModalMovement={setOpenModalMovement}
      />
    </>
  );
};

Movements.requireAuth = true;
export default Movements;
