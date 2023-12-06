"use server";

import { db } from "../lib/mongo";
import { Job } from "../models/Job";

export async function deleteJob({ jobId }) {
    await db.connect();
    const job = await Job.findById(jobId);
    if (!job) {
        throw new Error("Job not found");
    }
    await job.deleteOne();
    await db.disconnect();
}
