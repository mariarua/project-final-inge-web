import Management from "@/components/management";
import Modal from "@/components/modals/Modal";
import ModalMaterials from "@/components/modals/ModalMaterials";
import { useState } from "react";

const materials = [
  { id: 1, createdAt: "01-05-2023", name: "Hierro", price: 10 },
  { id: 2, createdAt: "02-05-2023", name: "Madera", price: 10 },
  { id: 3, createdAt: "03-05-2023", name: "Tierra", price: 10 },
  { id: 4, createdAt: "04-05-2023", name: "Oro", price: 10 },
  { id: 5, createdAt: "05-05-2023", name: "Zinc", price: 10 },
  { id: 6, createdAt: "06-05-2023", name: "Mercurio", price: 10 },
  { id: 7, createdAt: "07-05-2023", name: "Agua", price: 10 },
  { id: 8, createdAt: "08-05-2023", name: "Plata", price: 10 },
  { id: 9, createdAt: "09-05-2023", name: "Yeso", price: 10 },
  { id: 10, createdAt: "10-05-2023", name: "Carbón", price: 10 },
  { id: 11, createdAt: "11-05-2023", name: "Aluminio", price: 10 },
];

const Materials = () => {
  const [openModalMaterials, setOpenModalMaterials] = useState<boolean>(false);
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
              {materials.map((material) => (
                <tr key={material.id}>
                  <td>{material.id}</td>
                  <td>{material.createdAt}</td>
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

export default Materials;
