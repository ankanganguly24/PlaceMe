import { z } from "zod";

export const webhookSchema = z.object({
    data: z.any(),
    object: z.literal("event"),
    type: z.enum(["user.created", "user.updated", "user.deleted"]),
});

export const userWebhookSchema = z.object({
    id: z.string(),
    username: z.string(),
    profile_image_url: z.string().nullable(),
    email_addresses: z.array(
        z.object({
            email_address: z.string().email(),
        })
    ),
    private_metadata: z.object({
        roles: z.array(z.string()).optional(),
        permissions: z.number().optional(),
    }),
});
export const userDeleteWebhookSchema = z.object({
    id: z.string(),
    delete: z.boolean().optional(),
    object: z.string(),
});

export const userDeleteSchema = z.object({
    id: z.string(),
});
