// schemas/testResultSchema.ts
import { z } from "zod";

export const testResultSchema = z.object({
    reaction: z.string().min(1, "La reacción es obligatoria"),
    rating: z.coerce.number().min(1).max(10, "La calificación debe estar entre 1 y 10"),
    survival_status: z.boolean(),
    productId: z.string().uuid(),
    userId: z.string().uuid(),
});

export type TestResultFormValues = z.infer<typeof testResultSchema>;
