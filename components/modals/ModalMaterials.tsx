import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface ModalMaterialsProps {
  openModalMaterials: boolean;
  setOpenModalMaterials: Dispatch<SetStateAction<boolean>>;
}

const ModalMaterials = ({
  openModalMaterials,
  setOpenModalMaterials,
}: ModalMaterialsProps) => (
  <Modal
    open={openModalMaterials}
    setOpen={setOpenModalMaterials}
    modalTitle="Agregar un material"
  >
    <>
      <div className="flex flex-col gap-5 w-600">
        <form action="">
          <label htmlFor="name">
            <span className="text-gray-700 tracking-[0.3em]">Nombre:</span>
            <input
              className="text-gray-700 tracking-[0.3em]"
              type="text"
              name="name"
              id="name"
              placeholder="Madera"
            />
          </label>
          <label htmlFor="price">
            <span className="text-gray-700 tracking-[0.3em]">Saldo:</span>
            <input
              className="text-gray-700 tracking-[0.3em]"
              type="text"
              name="price"
              id="price"
              placeholder="300"
            />
          </label>
        </form>
        <div className="flex justify-between">
          <button
            className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
            onClick={() => setOpenModalMaterials(false)}
          >
            Salir
          </button>
          <button className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800">
            Enviar
          </button>
        </div>
      </div>
    </>
  </Modal>
);

export default ModalMaterials;
function createMaterial(arg0: {
  variables: { lot: any; bunches: any; collectionDate: any };
  refetchQueries: any[];
}) {
  throw new Error("Function not implemented.");
}
