import SignInCard from "@/src/components/auth/signin/signin-card";

function Page() {
    return (
        <section className="flex h-full min-h-screen items-center justify-center bg-black/50 p-4">
            <div className="h-full w-full max-w-md">
                <SignInCard />
            </div>
        </section>
    );
}

export default Page;
