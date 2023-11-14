import { env } from "@/env.mjs";
import { signUpSchema } from "@/src/lib/validations/auth";
import { isClerkAPIResponseError, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";

function SignUpForm() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [expired, setExpired] = useState(false);
    const [verified, setVerified] = useState(false);

    const { signUp, isLoaded: signUpLoaded, setActive } = useSignUp();

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: "",
        },
    });

    if (!signUpLoaded)
        return (
            <div className="flex h-full w-full items-center justify-center">
                <Spinner color="default" />
            </div>
        );

    const { startEmailLinkFlow } = signUp.createEmailLinkFlow();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setExpired(false);
        setVerified(false);

        const { username, email } = data;

        try {
            await signUp.create({
                username,
                emailAddress: email,
            });

            toast.success(
                "A sign up link has been sent to your email. Please check your inbox"
            );
        } catch (err) {
            setIsLoading(false);
            console.log(err);
            const unknownError = "Something went wrong, please try again.";

            isClerkAPIResponseError(err)
                ? toast.error(err.errors[0]?.longMessage ?? unknownError)
                : toast.error(unknownError);

            return;
        }

        const su = await startEmailLinkFlow({
            redirectUrl: env.NEXT_PUBLIC_APP_URL + "/verification",
        });

        const verification = su.verifications.emailAddress;

        if (verification.verifiedFromTheSameClient()) {
            setVerified(true);
            return;
        } else if (verification.status === "expired") setExpired(true);

        if (su.status === "complete") {
            setIsLoading(false);
            setActive({ session: su.createdSessionId }).then(() => {
                router.push("/profile");
                toast.success(
                    "Your account has been created. Please complete your profile."
                );
            });
            return;
        }
    };

    if (expired) {
        setIsLoading(false);
        router.push("/");
        toast.error("Verification link expired, please try again!");
    }
    if (verified) {
        setIsLoading(false);
        router.push("/profile");
        toast.success(
            "Your account has been created. Please complete your profile."
        );
    }

    return (
        <Form {...form}>
            <form
                className="grid gap-4"
                onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    classNames={{
                                        inputWrapper: "h-10",
                                    }}
                                    size="sm"
                                    isDisabled={isLoading}
                                    placeholder="duckymomo60"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    classNames={{
                                        inputWrapper: "h-10",
                                    }}
                                    size="sm"
                                    isDisabled={isLoading}
                                    placeholder="ryomensukuna@inspiria.edu.in"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    className="font-semibold"
                    type="submit"
                    radius="sm"
                    isDisabled={isLoading}
                    isLoading={isLoading}
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    );
}

export default SignUpForm;
