"use server";

import { db } from "../lib/mongo";
import { Job } from "../models/Job";

export async function postJob({ title, description, postedBy }) {
    await db.connect();
    await Job.create({ title, description, postedBy });
    await db.disconnect();
    return { success: true };
}
