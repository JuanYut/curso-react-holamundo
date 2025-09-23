import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "Longitud mínima 3." }),
  lastname: z
    .string()
    .min(1, { message: "Campo requerido" })
    .min(3, { message: "Longitud mínima 3." }),
});

export type userForm = z.infer<typeof userSchema>;
