import axios from 'axios';
import {create} from 'zustand'
import { usersSchemas } from './schemas/user-schema';

async function getUsers() {
    
const url='https://api.fake-rest.refine.dev/users'
const {data}=await axios.get(url)
const result=usersSchemas.safeParse(data)
console.log(result);



}

export const usersStore=create(()=>({

fetchUsers:()=>{

   getUsers()
    
}

}))