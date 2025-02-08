
import axios from "axios"
import { usersSchemas } from "../schemas/user-schema"

export async function getUsers() {

    const url = 'https://api.fake-rest.refine.dev/users'
    const { data } = await axios.get(url)
    const result = usersSchemas.safeParse(data)
    if (result.success) {
        return result.data
    }



}