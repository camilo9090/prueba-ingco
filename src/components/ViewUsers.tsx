import { useMemo } from "react"
import { usersStore } from "../store"
import ConfirmationDelete from "./ConfirmationDelete";


export default function viewUsers() {

    const usuarios = usersStore(state => state.listUser)
    const usuariosFilters = useMemo(() => usuarios.filter(salida => salida.status === true), [usuarios])
    const deleteUser = usersStore(state => state.deleteUser)


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


    )
}
