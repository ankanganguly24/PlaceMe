import { Applicant } from "@/src/models/Applicant";
import { db } from ".";

export async function getApplicants() {
    await db.connect();
    const applicants = await Applicant.find();
    await db.disconnect();
    return applicants;
}
