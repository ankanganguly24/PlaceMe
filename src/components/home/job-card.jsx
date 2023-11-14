"use client";

import { formatTimestampToDate } from "@/src/lib/utils";
import { Button, Card, CardBody, Image } from "@nextui-org/react";

function Jobcard({ title, description, image, createdAt }) {
    return (
        <Card>
            <CardBody>
                <div className="flex  items-center justify-between gap-4 px-5">
                    <div className="flex items-center gap-5">
                        <Image
                            src={image}
                            alt="company logo"
                            radius="full"
                            width={50}
                            height={50}
                        />

                        <div className=" space-y-3">
                            <div className="space-y-2">
                                <p className="font-bold">{title}</p>
                                <p className="text-gray-500">{description}</p>
                            </div>
                            <p>
                                <span className="text-gray-500">
                                    Posted on{" "}
                                </span>
                                {formatTimestampToDate(createdAt)}
                            </p>
                        </div>
                    </div>

                    <Button>Apply</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default Jobcard;
