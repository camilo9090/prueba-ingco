import { useEffect, useMemo } from "react"
import { usersStore } from "../store"
import ConfirmationDelete from "./ConfirmationDelete";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Header from "./Header";



export default function viewUsers() {

    const usuarios = usersStore(state => state.listUser)
    const usuariosFilters = useMemo(() => usuarios.filter(salida => salida.status === true), [usuarios]);
    const deleteUser = usersStore(state => state.deleteUser)

  

    const fetchUsers = usersStore(state => state.fetchUsers);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // Asegura que solo se ejecuta una vez
    
    return (

        <div className="">
            <Header/>

            <div className="max-w-5xl mx-auto mt-5">


                <p className="font-extrabold text-4xl">Administrar <span className="text-blue-700">Usuarios</span></p>

                <Link
                    to="/CreateUSer"
                    className="bg-blue-600 inline-flex p-3 mt-5 text-white font-extrabold uppercase  flex-row rounded-lg gap-2 items-center text-center hover:bg-blue-700">
                    <UserIcon
                        height={30}
                    />
                    Agregar Usuario
                </Link>



            </div>
            <div className=" mt-10 mb-10 font-bold">

                <table className="w-full max-w-5xl mx-auto table-auto shadow-md">
                    <thead className="bg-slate-800">

                        <tr className="bg-blue-600 text-white">
                            <th className="border-b p-2">Nombre</th>
                            <th className="border-b p-2">Apellido</th>
                            <th className="border-b p-2">Correo</th>
                            <th className="border-b p-2">Acciones</th>

                        </tr>
                    </thead>

                    <tbody>

                        {usuariosFilters.map((users) => (

                            <tr
                                className=""
                                key={users.id}>

                                <td className="border-b p-2 text-center">{users.firstName}</td>
                                <td className="border-b p-2 text-center">{users.lastName}</td>
                                <td className="border-b p-2 text-center">{users.email}</td>
                                <td className="border-b p-2 text-center">

                                    <div className="">

                                        <ConfirmationDelete
                                            userId={users.id}
                                            onDelete={deleteUser}
                                        />
                                    </div>
                                </td>

                            </tr>


                        ))}

                    </tbody>


                </table>
            </div>
        </div>


    )
}
