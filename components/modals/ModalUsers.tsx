import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import { users } from "@/pages/usuarios";

interface ModalUsersProps {
  openModalUsers: boolean;
  setOpenModalUsers: Dispatch<SetStateAction<boolean>>;
}

const roles = [
  {id:0, name:"ADMIN"},
  {id:1, name:"USER"}
];

function ModalUsers({
  openModalUsers,
  setOpenModalUsers,
}: ModalUsersProps) {
  return (
    <Modal
      open={openModalUsers}
      setOpen={setOpenModalUsers}
      modalTitle="Editar un Usuario"
    >
      <>
        <div className="flex flex-col gap-5 w-60">
          <form action="">
          <select name="select" id="select">
            <option value="usuario_0" disabled selected>
              Seleccionar usuario
            </option>
            {users.map((user) => (
              <option key={`user_${user.id}`} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <select name="select" id="select">
            <option value="material_0" disabled selected>
              Seleccionar rol
            </option>
            {roles.map((role) => (
              <option key={`role_${role.id}`} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          </form>
          <div className="flex justify-between">
            <button onClick={() => setOpenModalUsers(false)}>Salir</button>
            <button>Enviar</button>
          </div>
        </div>
      </>
    </Modal>
  );
}

export default ModalUsers;
