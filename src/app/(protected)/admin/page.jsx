"use client";

import { postJob } from "@/src/actions/job";
import { useAuth } from "@clerk/nextjs";
import axios from "axios"; // For making HTTP requests, you might need to install axios or use another library
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

function Page() {
    const { userId } = useAuth();

    const [jobHeading, setJobHeading] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const { mutate: handleJobPost } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Posting job...");
            return { toastId };
        },
        mutationFn: async () => {
            const { success } = await postJob({
                title: jobHeading,
                description: jobDescription,
                postedBy: userId,
            });
            if (!success) {
                throw new Error("Something went wrong");
            }
        },
        onSuccess: (_, __, ctx) => {
            toast.success("Job posted successfully", { id: ctx?.toastId });
        },
        onError: (err, _, ctx) => {
            toast.error(err, { id: ctx?.toastId });
        },
    });

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <div className="job-post-form">
                <label htmlFor="jobHeading">Job Heading:</label>
                <input
                    type="text"
                    id="jobHeading"
                    value={jobHeading}
                    onChange={(e) => setJobHeading(e.target.value)}
                />

                <label htmlFor="jobDescription">Job Description:</label>
                <textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>

                <button onClick={() => handleJobPost()}>Post Job</button>
            </div>
        </div>
    );
}

export default Page;
