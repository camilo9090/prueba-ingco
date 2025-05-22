
import axios from "axios"
import { usersSchemas } from "../schemas/user-schema"


// Función que permite obtener la lista de usuarios desde la API
export async function getUsers() {

    const url = 'https://api.fake-rest.refine.dev/users'
    const { data } = await axios.get(url)
    const result = usersSchemas.safeParse(data)
    if (result.success) {
        return result.data
    }



}