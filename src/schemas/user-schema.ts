
import { z } from 'zod'



export const userSchema = z.object({

  
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    id: z.number(),
    status: z.boolean().default(true),
 




})

export const usersSchemas = z.array(userSchema)