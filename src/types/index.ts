import { userSchema } from "../schemas/user-schema";
import { z } from "zod"; 


export type user=z.infer<typeof userSchema>