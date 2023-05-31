import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import Spinner from "@/components/spinner";
import { Role, User } from "@prisma/client";
import { useQuery } from "@apollo/client";
import { GET_EMAIL_USERS } from "@/graphql/client/users";
import { GET_ROLES } from "@/graphql/client/roles";

interface ModalUsersProps {
  openModalUsers: boolean;
  setOpenModalUsers: Dispatch<SetStateAction<boolean>>;
}

const ModalUsers = ({ openModalUsers, setOpenModalUsers }: ModalUsersProps) => {
  const { data, loading, error } = useQuery<{ users: User[] }>(
    GET_EMAIL_USERS,
    {
      fetchPolicy: "cache-first",
    }
  );
  const {
    data: dataRole,
    loading: loadingRole,
    error: errorRole,
  } = useQuery<{ roles: Role[] }>(GET_ROLES, {
    fetchPolicy: "cache-first",
  });

  if (error) return <p>Error Modal</p>;

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );

  if (errorRole) return <p>Error Role</p>;

  if (loadingRole)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
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
              <option value="usuario_0" disabled>
                Seleccionar usuario
              </option>
              {data?.users?.map((user) => (
                <option key={`user_${user.id}`} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            <select name="select" id="select">
              <option value="material_0" disabled>
                Seleccionar rol
              </option>
              {dataRole?.roles?.map((role) => (
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
};

export default ModalUsers;
