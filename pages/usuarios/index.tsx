import Management from "@/components/management";

const users = [
  { id: 1, createdAt: "01-05-2023", email: "correo-1@yopmail.com", role: "ADMIN"},
  { id: 2, createdAt: "02-05-2023", email: "correo-2@yopmail.com", role: "ADMIN"},
  { id: 3, createdAt: "03-05-2023", email: "correo-3@yopmail.com", role: "USER"},
  { id: 4, createdAt: "04-05-2023", email: "correo-4@yopmail.com", role: "USER"},
  { id: 5, createdAt: "05-05-2023", email: "correo-5@yopmail.com", role: "USER"},
  { id: 6, createdAt: "06-05-2023", email: "correo-6@yopmail.com", role: "USER"},
  { id: 7, createdAt: "07-05-2023", email: "correo-7@yopmail.com", role: "USER"},
  { id: 8, createdAt: "08-05-2023", email: "correo-8@yopmail.com", role: "USER"},
  { id: 9, createdAt: "09-05-2023", email: "correo-9@yopmail.com", role: "USER"},
  { id: 10, createdAt: "10-05-2023", email: "correo-10@yopmail.com", role: "USER"},
  { id: 11, createdAt: "11-05-2023", email: "correo-11@yopmail.com", role: "USER"},
];

const Users = () => (
  <>
    <Management title="Gestión de usuarios" buttonName="Editar usuario">      
      {/* children[0] */}
      <br />
      {/* children[1] */}
      <table className="table-auto">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Fecha de creación</th>
            <th>Nombre</th>
            <th>Saldo</th>
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
    </Management>
  </>
);

export default Users;