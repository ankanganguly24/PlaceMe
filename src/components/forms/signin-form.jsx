import { env } from "@/env.mjs";
import { signInSchema } from "@/src/lib/validations/auth";
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
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

function SignInForm() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [expired, setExpired] = useState(false);
    const [verified, setVerified] = useState(false);

    const { signIn, isLoaded: signInLoaded, setActive } = useSignIn();

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
        },
    });

    if (!signInLoaded)
        return (
            <div className="flex h-full w-full items-center justify-center">
                <Spinner color="default" />
            </div>
        );

    const { startEmailLinkFlow } = signIn.createEmailLinkFlow();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setExpired(false);
        setVerified(false);

        const { email } = data;

        let si;

        try {
            si = await signIn.create({ identifier: email });

            toast.success(
                "A sign in link has been sent to your email. Please check your inbox"
            );
        } catch (err) {
            setIsLoading(false);
            console.error(err);

            const unknownError = "An unknown error occurred. Please try again.";

            isClerkAPIResponseError(err)
                ? toast.error(err.errors[0]?.longMessage ?? unknownError)
                : toast.error(unknownError);

            return;
        }

        const siFactor = si.supportedFirstFactors.find(
            (x) => x.strategy === "email_link" && x.safeIdentifier === email
        );

        if (!siFactor || !siFactor.emailAddressId)
            return toast.success(
                "A sign in link has been sent to your email. Please check your inbox"
            );

        const res = await startEmailLinkFlow({
            emailAddressId: siFactor.emailAddressId,
            redirectUrl: env.NEXT_PUBLIC_APP_URL + "/verification",
        });

        const verification = res.firstFactorVerification;

        if (verification.verifiedFromTheSameClient()) {
            setVerified(true);
            return;
        } else if (verification.status === "expired") setExpired(true);

        if (res.status === "complete") {
            setIsLoading(false);
            setActive({ session: res.createdSessionId }).then(() => {
                router.push("/profile");
                toast.success("Welcome back!");
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
        toast.success("Welcome back!");
    }

    return (
        <Form {...form}>
            <form
                className="grid gap-4"
                onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
            >
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
                    Sign In
                </Button>
            </form>
        </Form>
    );
}

export default SignInForm;
