
import { create } from 'zustand'
import { user } from './types';
import { devtools } from 'zustand/middleware';
import { getUsers } from './services/usersService';



type UsersStore = {
    listUser: user[]
    fetchUsers: () => Promise<void>
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