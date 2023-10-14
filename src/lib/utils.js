import { AxiosError } from "axios";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

/**
 * @param {number} ms - milliseconds to wait
 * @returns {Promise<void>} a promise that resolves after ms milliseconds
 */
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {unknown} err - error to handle
 */
export function handleError(err) {
    console.error(err);

    if (err instanceof ZodError)
        return NextResponse.json({
            code: 422,
            message: err.issues.map((x) => x.message).join(", "),
        });
    else if (err instanceof AxiosError)
        return NextResponse.json({
            code: err.response.status,
            message: err.message,
        });
    else if (err instanceof MongooseError) {
        return NextResponse.json({
            code: 500,
            message: err.message,
        });
    } else
        return NextResponse.json({
            code: 500,
            message: "Internal Server Error!",
        });
}
