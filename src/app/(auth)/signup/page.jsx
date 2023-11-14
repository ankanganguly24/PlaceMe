import SignUpCard from "@/src/components/auth/signup/signup-card";

function Page() {
    return (
        <section className="flex h-full min-h-screen items-center justify-center bg-black/50 p-4">
            <div className="h-full w-full max-w-md">
                <SignUpCard />
            </div>
        </section>
    );
}

export default Page;
