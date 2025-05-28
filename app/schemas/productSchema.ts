import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    category:z.enum(["Eyeshadow", "Lipstick", "Foundation", "Blush"]),
    stock: z.coerce.number().int().min(0, "El stock debe ser mayor o igual a 0"),
    warehouse_location: z.string().min(1, "La ubicación es obligatoria"),
    durability_score: z.coerce.number().int().min(0).max(10, "La durabilidad debe estar entre 0 y 10"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
