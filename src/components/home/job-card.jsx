"use client";

import { applyToJob } from "@/src/actions/apply";
import { formatTimestampToDate, handleClientError } from "@/src/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
    Button,
    Card,
    CardBody,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

function Jobcard({ title, description, createdAt, id }) {
    const { user } = useUser();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { mutate: handleApply, isLoading } = useMutation({
        onMutate: () => {
            const toastId = toast.loading("Applying for the job...");
            return { toastId };
        },
        mutationFn: async () => {
            await applyToJob({
                appliedBy: user.id,
                jobId: id,
            });
        },
        onSuccess: (_, __, ctx) => {
            toast.success("Applied successfully", { id: ctx?.toastId });
        },

        onError: (error, _, ctx) => {
            handleClientError(error, ctx?.toastId);
        },
    });

    return (
        <>
            <Card
                classNames={{
                    body: "bg-yellow-300 hover:bg-yellow-400 transition-all cursor-pointer",
                }}
            >
                <CardBody>
                    <div className="flex  items-center justify-between gap-4 px-5">
                        <div className="flex items-center gap-5">
                            <div className=" space-y-3">
                                <div className="space-y-2">
                                    <p className="font-bold">{title}</p>
                                    <p className="text-gray-500">
                                        {description}
                                    </p>
                                </div>
                                <p>
                                    <span className="text-gray-500">
                                        Posted on{" "}
                                    </span>
                                    {formatTimestampToDate(createdAt)}
                                </p>
                            </div>
                        </div>

                        <Button className="font-bold" onPress={onOpen}>
                            Apply
                        </Button>
                    </div>
                </CardBody>
            </Card>
            <Modal
                className="bg-primary text-white"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader>Want to apply?</ModalHeader>
                            <ModalBody>
                                <ol>
                                    <li>
                                        - Login to your account or create a new
                                        one.
                                    </li>
                                    <br />
                                    <li>
                                        - Fill out the application form and
                                        submit it.
                                    </li>
                                    <br />
                                    <li>
                                        - Wait for the employer to contact you.
                                    </li>
                                </ol>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="font-bold "
                                    onPress={() => handleApply()}
                                    isDisabled={isLoading}
                                    isLoading={isLoading}
                                >
                                    Apply
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Jobcard;
