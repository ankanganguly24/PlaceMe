"use client";

import { postJob } from "@/src/actions/job";
import NavbarHome from "@/src/components/global/navbar/navbar-home";
import { useAuth } from "@clerk/nextjs";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from "@nextui-org/react";
import { is } from "date-fns/locale";
import React, { useState } from "react";
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
    {
        React.useEffect(() => {
            document.body.style.overflowY = "hidden";

            return () => {
                document.body.style.overflowY = "auto";
            };
        }, []);
    }
    return (
        <>
            <NavbarHome />
            <div className="flex h-screen items-center justify-center ">
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
            </div>
        </>
    );
}

export default Page;
