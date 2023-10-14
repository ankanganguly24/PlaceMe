import { createUser } from "@/src/lib/mongo/user";
import { handleError } from "@/src/lib/utils";
import { signUpSchema } from "@/src/lib/validations/auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { email, password, username } = signUpSchema.parse(body);
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await createUser({
            email,
            password: hashedPassword,
            username,
        });

        return NextResponse.json({
            code: 201,
            message: "Ok",
            data: JSON.stringify(newUser),
        });
    } catch (err) {
        return handleError(err);
    }
}
