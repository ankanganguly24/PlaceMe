"use server";

import { db } from "../lib/mongo";
import { Applicant } from "../models/Applicant";

export async function applyToJob({ jobId, appliedBy }) {
    await db.connect();

    const existingApplicant = await Applicant.findOne({
        jobId,
        appliedBy,
    });

    if (existingApplicant) {
        throw new Error("You have already applied to this job");
    }

    await Applicant.create({ jobId, appliedBy });

    await db.disconnect();
}

export async function updateApplication({
    jobId,
    applicantId,
    status,
    reason,
}) {
    await db.connect();

    const applicant = await Applicant.findOne({
        appliedBy: applicantId,
        jobId,
    });
    if (!applicant) {
        throw new Error("No such applicant");
    }

    switch (status) {
        case "accept":
            applicant.acceptedAt = new Date();
            break;
        case "reject":
            applicant.rejectedAt = new Date();
            applicant.rejectedReason = reason;
            break;
        default:
            throw new Error("Invalid status");
    }

    await applicant.save();
    await db.disconnect();
}
