// userSchema.ts
import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["Admin", "Client", "Tester", "Employee"]),
  purchase_history: z.array(z.string()),
  test_subject_status: z.boolean(),
  allergic_reactions: z.array(z.string()),
});


export type UserFormValues = z.infer<typeof userSchema>;
