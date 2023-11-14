"use client";

import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import NextLink from "next/link";
import SignInForm from "../../forms/signin-form";

function SignInCard() {
    return (
        <Card
            classNames={{
                header: "bg-primary p-6",
                body: "bg-primary p-6 pt-0",
            }}
        >
            <CardHeader>
                <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">Sign In</p>
                    <p className="text-gray-300">
                        Don&apos;t have an account?{" "}
                        <Link
                            as={NextLink}
                            href="/signup"
                            className="text-indigo-300"
                        >
                            Sign Up here.
                        </Link>
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <SignInForm />
            </CardBody>
        </Card>
    );
}

export default SignInCard;
