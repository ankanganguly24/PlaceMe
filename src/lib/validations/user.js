import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(3).max(20),
    id: z.string(),
});
