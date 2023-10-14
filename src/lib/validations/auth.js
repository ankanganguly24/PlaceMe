import { z } from "zod";

export const signUpSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at most 20 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            "Password must have 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character"
        ),
});

export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
});

export const updateUsernameSchema = z.object({
    username: signUpSchema.shape.username,
});

export const updatePasswordSchema = z.object({
    password: signUpSchema.shape.password,
});

export const updateEmailSchema = z.object({
    email: signUpSchema.shape.email,
});
