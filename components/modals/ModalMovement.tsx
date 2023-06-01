import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface ModalMovementProps {
  openModalMovement: boolean;
  setOpenModalMovement: Dispatch<SetStateAction<boolean>>;
}

const ModalMovement = ({
  openModalMovement,
  setOpenModalMovement,
}: ModalMovementProps) => (
  <Modal
    open={openModalMovement}
    setOpen={setOpenModalMovement}
    modalTitle="Agregar un movimiento"
  >
    <>
      <div className="flex flex-col gap-5">
        <form action="">
          <label htmlFor="input">
            <span className="text-gray-700 tracking-[0.3em]">Input:</span>
            <input
              className="text-gray-700 tracking-[0.3em]"
              type="text"
              name="input"
              id="input"
              placeholder="50"
            />
          </label>
          <label htmlFor="output">
            <span className="text-gray-700 tracking-[0.3em]">Output:</span>
            <input
              className="text-gray-700 tracking-[0.3em]"
              type="text"
              name="output"
              id="output"
              placeholder="25"
            />
          </label>
        </form>
        <div className="flex justify-between">
          <button
            className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
            onClick={() => setOpenModalMovement(false)}
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

export default ModalMovement;
