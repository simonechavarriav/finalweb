import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    test_subject_status: z.boolean().default(false),
});


export type RegisterFormValues = z.infer<typeof registerSchema>;
