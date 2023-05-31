import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/graphql/client/users";
import { Role } from "@prisma/client";

import Management from "@/components/management";
import ModalUsers from "@/components/modals/ModalUsers";
import Spinner from "@/components/spinner";

interface User {
  id: string;
  createdAt: {
    year: string;
    month: string;
    day: string;
  };
  email: string;
  role: Role;
}

const Users = () => {
  const router = useRouter();
  const { status } = useSession();
  const [openModalUsers, setOpenModalUsers] = useState<boolean>(false);
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS, {
    fetchPolicy: "cache-first",
  });

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (error) return <p>Error users</p>;

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />;
      </div>
    );

  return (
    <>
      <Management title="Gestión de usuarios">
        <>
          <div className="flex justify-end">
            <button onClick={() => setOpenModalUsers(true)}>
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
              {data?.users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{`${user.createdAt.year}-${user.createdAt.month}-${user.createdAt.day}`}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </Management>
      <ModalUsers
        openModalUsers={openModalUsers}
        setOpenModalUsers={setOpenModalUsers}
      />
    </>
  );
};

Users.requireAuth = true;
export default Users;
