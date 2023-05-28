import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface ModalMaterialsProps {
  openModalMaterials: boolean;
  setOpenModalMaterials: Dispatch<SetStateAction<boolean>>;
}

function ModalMaterials({
  openModalMaterials,
  setOpenModalMaterials,
}: ModalMaterialsProps) {
  return (
    <Modal
      open={openModalMaterials}
      setOpen={setOpenModalMaterials}
      modalTitle="Agregar un material"
    >
      <>
        <div className="flex flex-col gap-5">
          <form action="">
            <label htmlFor="name">
              <span>Nombre:</span>
              <input type="text" name="name" id="name" placeholder="Madera" />
            </label>
            <label htmlFor="price">
              <span>Saldo:</span>
              <input type="text" name="price" id="price" placeholder="300" />
            </label>
          </form>
          <div className="flex justify-between">
            <button onClick={() => setOpenModalMaterials(false)}>Salir</button>
            <button>Enviar</button>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default ModalMaterials;
