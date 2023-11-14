import SSOCallback from "@/src/components/auth/sso-callback";

function Page() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background p-5">
            <SSOCallback />
        </div>
    );
}

export default Page;
