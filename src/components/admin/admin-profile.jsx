"use client";

import { deleteJob } from "@/src/actions/deletejob";
import { postJob } from "@/src/actions/job";
import NavbarHome from "@/src/components/global/navbar/navbar-home";
import { handleClientError } from "@/src/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import ApplicantInfo from "./applicant-info";

function AdminProfile({ jobs, applicants, users }) {
    const { user } = useUser();

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
                postedBy: user.id || users[1].userId,
            });
            if (!success) {
                throw new Error("Something went wrong");
            }
        },
        onSuccess: (_, __, ctx) => {
            toast.success("Job posted successfully", { id: ctx?.toastId });
        },
        onError: (error, _, ctx) => {
            handleClientError(error, ctx?.toastId);
        },
    });

    const { mutate: deleteJobPost } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Deleting job...");
            return { toastId };
        },
        mutationFn: async ({ jobId }) => {
            const { deleteJobPost } = await deleteJob({
                jobId,
            });
            if (!deleteJobPost) {
                throw new Error("Something went wrong");
            }
        },
        onSuccess: (_, __, ctx) => {
            toast.success("Job posted successfully", { id: ctx?.toastId });
        },
        onError: (error, _, ctx) => {
            handleClientError(error, ctx?.toastId);
        },
    });

    return (
        <>
            <NavbarHome />
            <div className="flex h-screen flex-col items-center gap-5 p-5">
                <Card className="bg-primary text-white">
                    <div className="grid gap-2 p-9">
                        <CardHeader className="flex gap-4">
                            <Image
                                alt="admin logo"
                                height={50}
                                radius="sm"
                                src="admin.webp"
                                width={50}
                            />
                            <div className="">
                                <h1 className="text-lg font-bold">Admin</h1>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className=" text-black">
                            <label
                                htmlFor="jobHeading"
                                className="font-bold text-white"
                            >
                                Job Heading:
                            </label>
                            <input
                                type="text"
                                id="jobHeading"
                                value={jobHeading}
                                placeholder="Job Heading"
                                onChange={(e) => setJobHeading(e.target.value)}
                            />
                            <br />
                            <label
                                htmlFor="jobDescription"
                                className="font-bold text-white"
                            >
                                Job Description:
                            </label>
                            <textarea
                                id="jobDescription"
                                placeholder="Job Description"
                                type="text"
                                value={jobDescription}
                                onChange={(e) =>
                                    setJobDescription(e.target.value)
                                }
                            ></textarea>
                        </CardBody>
                        <Divider />
                        <CardFooter className="items-centers flex flex-col">
                            <Button
                                className="bg-warning font-bold text-white"
                                onClick={() => handleJobPost()}
                            >
                                Post Job
                            </Button>
                        </CardFooter>
                    </div>
                </Card>

                <div className="flex flex-col gap-3 ">
                    {applicants.map((applicant) => {
                        const job = jobs.find(
                            (job) => job._id === applicant.jobId
                        );
                        if (!job) return null;

                        const user = users.find(
                            (user) => user.userId === applicant.appliedBy
                        );
                        if (!user) return null;

                        return (
                            <>
                                <ApplicantInfo
                                    user={user}
                                    key={user.id}
                                    job={job}
                                    applicant={applicant}
                                />
                                <div>
                                    <Button
                                        className="bg-danger font-bold text-white"
                                        onPress={() =>
                                            deleteJobPost({
                                                jobId: job._id,
                                            })
                                        }
                                    >
                                        Delete Job
                                    </Button>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default AdminProfile;
