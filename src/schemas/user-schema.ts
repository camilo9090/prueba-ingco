
import { z } from 'zod'



export const userSchema = z.object({

    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    status: z.boolean(),

})

export const usersSchemas = z.array(userSchema)