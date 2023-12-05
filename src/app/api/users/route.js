import { env } from "@/env.mjs";
import { createUser, updateUser } from "@/src/lib/mongo/user";
import { handleError } from "@/src/lib/utils";
import {
    userWebhookSchema,
    webhookSchema,
} from "@/src/lib/validations/webhook";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req) {
    const payload = await req.json();

    const headers = {
        "svix-id": req.headers.get("svix-id"),
        "svix-timestamp": req.headers.get("svix-timestamp"),
        "svix-signature": req.headers.get("svix-signature"),
    };

    const wh = new Webhook(env.SVIX_SECRET);
    let body;

    try {
        body = wh.verify(JSON.stringify(payload), headers);
    } catch (err) {
        return NextResponse.json({
            code: 400,
            message: "Bad Request!",
        });
    }

    const { type, data } = webhookSchema.parse(body);

    switch (type) {
        case "user.created": {
            try {
                const { email_addresses, id, profile_image_url, username } =
                    userWebhookSchema
                        .omit({
                            private_metadata: true,
                        })
                        .parse(data);

                await createUser({
                    email: email_addresses[0].email_address,
                    userId: id,
                    imageUrl: profile_image_url,
                    username,
                });

                return NextResponse.json({
                    code: 201,
                    message: "Ok",
                });
            } catch (err) {
                return handleError(err);
            }
        }

        case "user.updated": {
            try {
                const { id, profile_image_url, username } =
                    userWebhookSchema.parse(data);

                await updateUser({
                    id,
                    username,
                    imageUrl: profile_image_url,
                });

                return NextResponse.json({
                    code: 200,
                    message: "Ok",
                });
            } catch (err) {
                return handleError(err);
            }
        }

        default: {
            return NextResponse.json({
                code: 400,
                message: "Bad Request!",
            });
        }
    }
}
