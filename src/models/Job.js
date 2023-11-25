import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: String,
        required: true,
    },
});

export const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);
