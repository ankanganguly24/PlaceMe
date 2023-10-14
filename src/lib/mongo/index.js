import { env } from "@/env.mjs";
import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect(env.DATABASE_URL);
        } catch (error) {
            console.error(error);
        }
    }
};

const disconnect = async () => {
    if (mongoose.connection.readyState === 1) {
        try {
            await mongoose.disconnect();
        } catch (error) {
            console.error(error);
        }
    }
};

export const db = {
    connect,
    disconnect,
};
