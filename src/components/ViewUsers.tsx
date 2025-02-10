import { useMemo } from "react"
import { usersStore } from "../store"
import ConfirmationDelete from "./ConfirmationDelete";
import { UserIcon } from "@heroicons/react/24/solid";



export default function viewUsers() {

    const usuarios = usersStore(state => state.listUser)
    const usuariosFilters = useMemo(() => usuarios.filter(salida => salida.status === true), [usuarios])
    const deleteUser = usersStore(state => state.deleteUser)


    return (

        <div className="container m-5">

            <div className="max-w-5xl mx-auto">


                <p className="font-extrabold text-4xl">Administrar <span className="text-blue-700">Usuarios</span></p>



                <button className="bg-blue-600 p-3 mt-5 text-white font-extrabold uppercase flex flex-row rounded-lg gap-2 items-center">
                    <UserIcon
                        height={30}
                    />
                    Agregar Usuario
                </button>

            </div>
            <div className=" mt-10 mb-10 font-bold">

                <table className="w-full max-w-5xl mx-auto">
                    <thead>

                        <tr className="bg-blue-400">
                            <th className="border p-2">Nombre</th>
                            <th className="border p-2">Apellido</th>
                            <th className="border p-2">Correo</th>
                            <th className="border p-2">Acciones</th>

                        </tr>
                    </thead>

                    <tbody>

                        {usuariosFilters.map((users) => (

                            <tr
                                className=""
                                key={users.id}>


                                <td className="border p-2 text-center">{users.firstName}</td>
                                <td className="border p-2 text-center">{users.lastName}</td>
                                <td className="border p-2 text-center">{users.email}</td>

                                <td className="border p-2 text-center">

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
