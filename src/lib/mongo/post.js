import { Job } from "@/src/models/Job";
import { db } from ".";

export async function getJobs(){
    await db.connect();
    const jobs = await Job.find();
    await db.disconnect();
    return jobs;
}