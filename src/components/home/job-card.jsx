"use client";

import {
    Button,
    Card,
    CardBody,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";

function Jobcard({ title, description, image, createdAt }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card
                classNames={{
                    body: "bg-yellow-300 hover:bg-yellow-400 transition-all cursor-pointer",
                }}
            >
                <CardBody>
                    <div className="flex  items-center justify-between gap-4">
                        <div className="flex items-center gap-5">
                            <div>
                                <Image
                                    src={image}
                                    radius="full"
                                    width={50}
                                    height={50}
                                />
                            </div>
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
                                    {new Date(createdAt).toLocaleDateString()}
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
                    {(onClose) => (
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
                                <Button className="font-bold">Apply</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Jobcard;
