
import { create } from 'zustand'
import { user } from './types';
import { devtools } from 'zustand/middleware';
import { getUsers } from './services/usersService';
import axios from 'axios';



type UsersStore = {
    listUser: user[]
    fetchUsers: () => Promise<void>
    deleteUser: (id: user['id']) => Promise<void>
    createUser: (userData: Omit<user, "id" | "status" | "birthday" | "skills" | "avatar">) => Promise<void>
}


export const usersStore = create<UsersStore>()(devtools((set) => ({

    listUser: [],
    fetchUsers: async () => {
        const listUser = await getUsers();
        set(state => ({
            listUser: JSON.stringify(state.listUser) !== JSON.stringify(listUser) ? listUser : state.listUser
        }));
    }
,    
    deleteUser: async (id) => {
        const url = `https://api.fake-rest.refine.dev/users/${id}`
        await axios.delete(url)
        set(state => ({

            listUser: state.listUser.filter(user => user.id !== id)
        }))

    },

    createUser: async (newUser:user) => {

        const url = 'https://api.fake-rest.refine.dev/users/'
        const response = await axios.post(url,newUser)
        set(state => ({

            listUser:[...(state.listUser),response.data]
        }))

    }

})))