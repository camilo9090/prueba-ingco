import { useEffect, useMemo, useState } from "react";
import { usersStore } from "../store";
import ConfirmationDelete from "./ConfirmationDelete";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Header from "./Header";
import Pagination from '@mui/material/Pagination';
import Footer from "./Footer";



export default function ViewUsers() {
  //llama la funcion listUser
  const usuarios = usersStore((state) => state.listUser);



  //fitra usuarios por el campo status(true)
  const usuariosFilters = useMemo(
    () => usuarios.filter((salida) => salida.status === true),
    [usuarios]
  );

  const [page, setPAge] = useState(1)
  const usersPerPage = 6;

  // este es calculo de los usarios para la paginacion
  const indexOfFirstUser = (page - 1) * usersPerPage;
  const indexOfLastUser = indexOfFirstUser + usersPerPage;
  const currentUsers = usuariosFilters.slice(indexOfFirstUser, indexOfLastUser);

  const pageCount = Math.ceil(usuariosFilters.length / usersPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPAge(value);
  }

  //llama la funcion deleteUser
  const deleteUser = usersStore((state) => state.deleteUser);
  //llama la funcion fetchUsers
  const fetchUsers = usersStore((state) => state.fetchUsers);

  //llama la funcion fetchUsers al cargar el componente y cada que cambie la lista de usuarios
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto mt-5 bg-gray-700 p-10 rounded-lg shadow-md text-center flex justify-center gap-10 items-center">
        <p className="font-bold text-2xl text-white">
          Creación de Usuarios:
        </p>

        <Link
          to="/CreateUSer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold  p-3 mt-5 inline-flex items-center gap-2 rounded-lg transition duration-200"
        >
          <UserIcon height={30} />
          Agregar un Usuario
        </Link>
      </div>
      <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto bg-gray-700 p-5 rounded-lg shadow-md">


        {/* Mapeo de usuarios filtrados para mostrar en la interfaz */}
        {currentUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
          >
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-gray-600">
                {user.firstName}{" "}
                <span className="text-amber-600">{user.lastName}</span>
              </p>
              <p className="text-gray-600 text-sm font-bold">{user.email}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <ConfirmationDelete userId={user.id} onDelete={deleteUser} />
            </div>
          </div>

        ))}



      </div>

      <div className="">
        <Pagination className="mt-10 mb-10  p-10 rounded-lg shadow-md "
          count={pageCount}
          page={page}
          onChange={handleChange} variant="outlined" shape="rounded" />

      </div>

      <Footer />

    </>
  );
}
