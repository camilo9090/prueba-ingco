
import { z } from 'zod'


//userSchema es para validar los datos de un usuario por medio de zod
export const userSchema = z.object({  
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    id: z.number(),
    status: z.boolean().default(true),
})

export const usersSchemas = z.array(userSchema)