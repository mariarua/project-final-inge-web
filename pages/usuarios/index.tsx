import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/graphql/client/users";
import { User } from "@prisma/client";

import Management from "@/components/management";
import ModalUsers from "@/components/modals/ModalUsers";
import Spinner from "@/components/spinner";

const Users = () => {
  const [openModalUsers, setOpenModalUsers] = useState<boolean>(false);
  const { data: usersData, loading: usersLoading } = useQuery<{
    users: (User & { role: { name: string } })[];
  }>(GET_USERS, {
    fetchPolicy: "cache-first",
  });

  return (
    <>
      <Management title="Gestión de usuarios">
        <div className="flex justify-end">
          <button
            className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
            onClick={() => setOpenModalUsers(true)}
          >
            Editar usuario
          </button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Fecha de creación</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usersLoading && (
              <td colSpan={4} className="p-3">
                <Spinner />
              </td>
            )}
            {usersData?.users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{new Date(user.createdAt).toLocaleString("es-CO")}</td>
                <td>{user.email}</td>
                <td>{user.role.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Management>
      <ModalUsers
        openModalUsers={openModalUsers}
        setOpenModalUsers={setOpenModalUsers}
      />
    </>
  );
};

Users.requireAuth = true;
Users.roles = ["ADMIN"];
export default Users;
