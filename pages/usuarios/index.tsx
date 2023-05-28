import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Management from "@/components/management";
import ModalUsers from "@/components/modals/ModalUsers";
import { useState } from "react";

export const users = [
  {
    id: 1,
    createdAt: "01-05-2023",
    name: "Ana",
    email: "correo-1@yopmail.com",
    role: "ADMIN",
  },
  {
    id: 2,
    createdAt: "02-05-2023",
    name: "Maria",
    email: "correo-2@yopmail.com",
    role: "ADMIN",
  },
  {
    id: 3,
    createdAt: "03-05-2023",
    name: "Santiago",
    email: "correo-3@yopmail.com",
    role: "USER",
  },
  {
    id: 4,
    createdAt: "04-05-2023",
    name: "Tatiana",
    email: "correo-4@yopmail.com",
    role: "USER",
  },
  {
    id: 5,
    createdAt: "05-05-2023",
    name: "Sofia",
    email: "correo-5@yopmail.com",
    role: "USER",
  },
  {
    id: 6,
    createdAt: "06-05-2023",
    name: "Juan Manuel",
    email: "correo-6@yopmail.com",
    role: "USER",
  },
  {
    id: 7,
    createdAt: "07-05-2023",
    name: "Daniel",
    email: "correo-7@yopmail.com",
    role: "USER",
  },
  {
    id: 8,
    createdAt: "08-05-2023",
    name: "Kevin",
    email: "correo-8@yopmail.com",
    role: "USER",
  },
  {
    id: 9,
    createdAt: "09-05-2023",
    name: "Estaban",
    email: "correo-9@yopmail.com",
    role: "USER",
  },
  {
    id: 10,
    createdAt: "10-05-2023",
    name: "Alejandro",
    email: "correo-10@yopmail.com",
    role: "USER",
  },
  {
    id: 11,
    createdAt: "11-05-2023",
    name: "Nik",
    email: "correo-11@yopmail.com",
    role: "USER",
  },
];
  
const Users = () => {
  const router = useRouter();
  const { status } = useSession();
  const [openModalUsers, setOpenModalUsers] = useState<boolean>(false);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <>
    <Management title="Gestión de usuarios">
      <>
        <div className="flex justify-end">
          <button onClick={() => (setOpenModalUsers(true))}>Editar usuario</button>
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.createdAt}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </Management>
    <ModalUsers openModalUsers={openModalUsers} setOpenModalUsers={setOpenModalUsers}/>
  </>
  );
};

Users.requireAuth = true;
export default Users;