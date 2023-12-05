import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema({
    jobId: {
        type: String,
        required: true,
    },
    appliedBy: {
        type: String,
        required: true,
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
    acceptedAt: {
        type: Date,
        default: null,
    },
    rejectedReason: {
        type: String,
    },
    rejectedAt: {
        type: Date,
        default: null,
    },
});

export const Applicant =
    mongoose.models.Applicant || mongoose.model("Applicant", ApplicantSchema);
