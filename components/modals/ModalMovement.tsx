import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";

interface ModalMovementProps {
  openModalMovement: boolean;
  setOpenModalMovement: Dispatch<SetStateAction<boolean>>;
}

function ModalMovement({
  openModalMovement,
  setOpenModalMovement,
}: ModalMovementProps) {
  return (
    <Modal
      open={openModalMovement}
      setOpen={setOpenModalMovement}
      modalTitle="Agregar un movimiento"
    >
      <>
        <div className="flex flex-col gap-5">
          <form action="">
            <label htmlFor="input">
              <span>Input:</span>
              <input type="text" name="input" id="input" placeholder="50" />
            </label>
            <label htmlFor="output">
              <span>Output:</span>
              <input type="text" name="output" id="output" placeholder="25" />
            </label>
          </form>
          <div className="flex justify-between">
            <button onClick={() => setOpenModalMovement(false)}>Salir</button>
            <button>Enviar</button>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default ModalMovement;
