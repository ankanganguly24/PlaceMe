import { env } from "@/env.mjs";
import { createUser } from "@/src/lib/mongo/user";
import {
    userDeleteSchema,
    userWebhookSchema,
    webhookSchema,
} from "@/src/lib/validations/webhook";
import { NextResponse } from "next/server";

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
                const {
                    email_addresses,
                    first_name,
                    id,
                    last_name,
                    profile_image_url,
                } = userWebhookSchema
                    .omit({
                        private_metadata: true,
                    })
                    .parse(data);

                await createUser({
                    email: email_addresses[0].email_address,
                    firstName: first_name,
                    lastName: last_name,
                    userId: id,
                    imageUrl: profile_image_url,
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
            const {
                id,
                email_addresses,
                profile_image_url,
                username,
                private_metadata,
            } = userWebhookSchema.parse(data);

            return NextResponse.json({
                code: 200,
                message: "Ok",
            });
        }

        case "user.deleted": {
            const { id } = userDeleteSchema.parse(data);

            return NextResponse.json({
                code: 200,
                message: "Ok",
                data: JSON.stringify(id),
            });
        }

        default: {
            return NextResponse.json({
                code: 400,
                message: "Bad Request!",
            });
        }
    }
}
