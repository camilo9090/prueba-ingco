import { usersStore } from "../store"

export default function viewUsers() {

    const usuarios = usersStore(state => state.listUser)

    return (

        <div className="container">
            <table className="w-full">
                <thead>

                    <tr className="bg-blue-400">
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Apellido</th>
                        <th className="border p-2">Correo</th>

                    </tr>
                </thead>

                <tbody>

                    {usuarios.map((users) => (

                        <tr
                            className="hover:bg-gray-400"
                            key={users.id}>


                            <td className="border p-2 text-center">{users.firstName}</td>
                            <td className="border p-2 text-center">{users.lastName}</td>
                            <td className="border p-2 text-center">{users.email}</td>


                        </tr>


                    ))}

                </tbody>


            </table>
        </div>


    )
}
