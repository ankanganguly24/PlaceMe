"use client";

import { updateApplication } from "@/src/actions/apply";
import {
    Button,
    Card,
    CardBody,
    Chip,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

function ApplicantInfo({ user, key, job, applicant }) {
    const router = useRouter();

    const [reason, setReason] = useState("");
    const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

    const { mutate: handleUpdateApplication } = useMutation({
        onMutate: ({ status }) => {
            const toastId = toast.loading(
                status === "accept" ? "Accepting..." : "Rejecting..."
            );
            return { toastId };
        },
        mutationFn: async ({ userId, jobId, reason, status }) => {
            await updateApplication({
                applicantId: userId,
                jobId,
                status,
                reason,
            });
        },
        onSuccess: (_, { status }, ctx) => {
            toast.success(
                status === "accept"
                    ? "Application accepted successfully"
                    : "Application rejected successfully",
                { id: ctx?.toastId }
            );
            router.refresh();
        },
        onError: (error, _, ctx) => {
            handleClientError(error, ctx?.toastId);
        },
    });

    return (
        <>
            <Card className="bg-primary text-white" key={key}>
                <CardBody>
                    <div>
                        <p className="font-bold">{job.title}</p>
                        <p>{job.description}</p>
                    </div>
                    <div>
                        <p className="font-bold">{user.username}</p>
                    </div>

                    {applicant.acceptedAt || applicant.rejectedAt ? (
                        <div>
                            {applicant?.rejectedReason && (
                                <p>
                                    <span className="font-bold">Reason: </span>
                                    {applicant.rejectedReason}
                                </p>
                            )}
                            <Chip>
                                {applicant.acceptedAt ? "Accepted" : "Rejected"}
                            </Chip>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Button
                                onPress={() => {
                                    handleUpdateApplication({
                                        userId: user.userId,
                                        jobId: job._id,
                                        status: "accept",
                                    });
                                }}
                            >
                                Accept
                            </Button>

                            <Button onPress={() => onOpen()}>Reject</Button>
                        </div>
                    )}
                </CardBody>
            </Card>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={() => {
                    setReason("");
                    onClose();
                }}
            >
                <ModalContent>
                    {(close) => (
                        <>
                            <ModalHeader>Reject Application</ModalHeader>

                            <ModalBody>
                                <Textarea
                                    placeholder="Enter reason for rejection"
                                    value={reason}
                                    onValueChange={setReason}
                                    variant="underlined"
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button onPress={() => close()}>Cancel</Button>
                                <Button
                                    onPress={() => {
                                        handleUpdateApplication({
                                            userId: user.userId,
                                            jobId: job._id,
                                            status: "reject",
                                            reason,
                                        });
                                        close();
                                    }}
                                    isDisabled={!reason}
                                >
                                    Reject
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ApplicantInfo;
