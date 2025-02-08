import axios from 'axios';
import { create } from 'zustand'
import { usersSchemas } from './schemas/user-schema';
import { user } from './types';
import { devtools } from 'zustand/middleware';



type UsersStore = {
    listUser: user[]
    fetchUsers: () => Promise<void>
}
async function getUsers() {

    const url = 'https://api.fake-rest.refine.dev/users'
    const { data } = await axios.get(url)
    const result = usersSchemas.safeParse(data)
    if (result.success) {
        return result.data
    }



}

export const usersStore = create<UsersStore>()(devtools((set) => ({

    listUser: [],
    fetchUsers: async () => {

        const listUser = await getUsers()

        set({
            listUser
        })

    }

})))