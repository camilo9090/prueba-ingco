import { useMemo } from "react"
import { usersStore } from "../store"
import { TrashIcon } from "@heroicons/react/24/solid";

export default function viewUsers() {

    const usuarios = usersStore(state => state.listUser)
    const usuariosFilters = useMemo(() => usuarios.filter(salida => salida.status === true), [usuarios])

    return (

        <div className="container">
            <table className="w-full">
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
                                 
                                      <button className="bg-red-500 flex flex-row text-white p-2 rounded-lg w-full hover:bg-red-600 transition-colors">
                                      <TrashIcon
                                        width={20}
                                      
                                        />
                                        Eliminar
                                       </button>
                                        
                                </div>
                                

                            </td>

                        </tr>


                    ))}

                </tbody>


            </table>
        </div>


    )
}
