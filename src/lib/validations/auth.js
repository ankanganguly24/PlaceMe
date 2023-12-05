import { z } from "zod";

export const usernameSchema = z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long");

export const emailSchema = z.string().email("Invalid email address");
// .regex(
//     /^[a-zA-Z0-9_.+-]+@inspiria\.edu\.in$/,
//     "Email must be a valid Inspiria email address"
// );

export const signUpSchema = z.object({
    username: usernameSchema,
    email: emailSchema,
});

export const signInSchema = z.object({
    email: emailSchema,
});
