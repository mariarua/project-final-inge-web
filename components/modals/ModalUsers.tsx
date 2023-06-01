import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Modal from "./Modal";
import Spinner from "@/components/spinner";
import { Role, User } from "@prisma/client";
import { useMutation, useQuery } from "@apollo/client";
import { GET_EMAIL_USERS, UPDATE_ROLE } from "@/graphql/client/users";
import { GET_ROLES } from "@/graphql/client/roles";
import { toast } from "react-toastify";

interface ModalUsersProps {
  openModalUsers: boolean;
  setOpenModalUsers: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  roleId: string;
  updateRoleId: string;
}

const initialFormData: FormData = {
  roleId: "",
  updateRoleId: "",
};

const ModalUsers = ({ openModalUsers, setOpenModalUsers }: ModalUsersProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [updateRole, { loading: loadingMutation }] = useMutation(UPDATE_ROLE);

  const handleSubmit = async () => {
    const { roleId, updateRoleId } = formData;
    try {
      await updateRole({
        variables: {
          roleId,
          updateRoleId,
        },
      });
      toast.success("Rol actualizado con éxito");

      setFormData(initialFormData);
      setOpenModalUsers(false);
    } catch (error) {
      toast.error("Error al actualizar el rol del usuario");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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

    const handleClose = () => {
    setOpenModalUsers(false);
    setFormData(initialFormData);
  };
  return (
    <Modal
      open={openModalUsers}
      setOpen={setOpenModalUsers}
      modalTitle="Editar un Usuario"
    >
      <>
        <div className="flex flex-col gap-5 w-60">
          <form>
            <select name="updateRoleId" id="updateRoleId" onChange={handleChange} defaultValue="usuario_0">
              <option value="usuario_0" disabled>
                Seleccionar usuario
              </option>
              {data?.users?.map((user) => (
                <option key={`user_${user.id}`} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            <select name="roleId" id="roleId" onChange={handleChange} defaultValue="role_0">
              <option value="role_0" disabled>
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
          <button onClick={() => handleClose()}>Salir</button>
          <button disabled={loadingMutation} onClick={handleSubmit}>
            Enviar
          </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ModalUsers;
