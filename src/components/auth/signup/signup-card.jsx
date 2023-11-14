"use client";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import NextLink from "next/link";
import SignUpForm from "../../forms/signup-form";

function SignUpCard() {
    return (
        <Card
            classNames={{
                header: "bg-primary p-6",
                body: "bg-primary p-6 pt-0",
            }}
        >
            <CardHeader>
                <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">
                        Create an account
                    </p>
                    <p className="text-gray-300">
                        Already have an account?{" "}
                        <Link
                            as={NextLink}
                            href="/signin"
                            className="text-indigo-300"
                        >
                            Login here.
                        </Link>
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <SignUpForm />
            </CardBody>
        </Card>
    );
}

export default SignUpCard;
