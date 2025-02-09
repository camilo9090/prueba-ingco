
import { create } from 'zustand'
import { user } from './types';
import { devtools } from 'zustand/middleware';
import { getUsers } from './services/usersService';
import axios from 'axios';



type UsersStore = {
    listUser: user[]
    fetchUsers: () => Promise<void>
    deleteUser: (id: user['id']) => Promise<void>;
}


export const usersStore = create<UsersStore>()(devtools((set) => ({

    listUser: [],
    fetchUsers: async () => {

        const listUser = await getUsers()

        set({
            listUser
        })

    },
    deleteUser: async (id) => {
        const url = `https://api.fake-rest.refine.dev/users/${id}`
        await axios.delete(url)
        set(state=>({

            listUser:state.listUser.filter(user=>user.id !==id)
        }))

    }

})))