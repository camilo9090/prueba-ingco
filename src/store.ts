
import { create } from 'zustand'
import { user } from './types';

import { getUsers } from './services/usersService';
import axios from 'axios';



type UsersStore = {
    listUser: user[]
    fetchUsers: () => Promise<void>
    deleteUser: (id: user['id']) => Promise<void>
     // Función para crear un nuevo usuario, omitiendo campod id,status,birthday,skills y avatar
    createUser: (userData: Omit<user, "id" | "status" | "birthday" | "skills" | "avatar">) => Promise<void>
}


// Creación del store de Zustand para manejar el estado de los usuarios
export const usersStore = create<UsersStore>()((set) => ({

    // Estado inicial de la lista de la lista
    listUser: [],
    // Función para obtener la lista de usuarios
    fetchUsers: async () => {
        const listUser = await getUsers();
        set(state => ({
            listUser: JSON.stringify(state.listUser) !== JSON.stringify(listUser) ? listUser : state.listUser
        }));
    }, 
    // Función para eliminar un usuario   
    deleteUser: async (id) => {
        const url = `https://api.fake-rest.refine.dev/users/${id}`
        await axios.delete(url)
        set(state => ({

            listUser: state.listUser.filter(user => user.id !== id)
        }))

    },
    // Función para crear un nuevo usuario
    createUser: async (newUser) => {

        const url = 'https://api.fake-rest.refine.dev/users/'
        const response = await axios.post(url,newUser)
        set(state => ({

            listUser:[...(state.listUser),response.data]
        }))

    }

}))