import { AxiosError } from "axios";
import clsx from "clsx";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

/**
 *
 * @param  {import("clsx").ClassValue[]} inputs
 * @returns
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

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

/**
 * @param {number} ms - milliseconds to format
 * @returns {string} formatted timestamp
 */
export function formatTimestampToDate(ms) {
    const date = new Date(ms);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
