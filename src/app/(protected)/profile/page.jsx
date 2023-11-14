import ProfileFetch from "@/src/components/profile/profile-fetch";

function Page() {
    return (
        <section className="flex p-5 py-10">
            <div className="container max-w-4xl space-y-8 p-0 2xl:max-w-6xl">
                <div className="space-y-2">
                    <p className="text-4xl font-bold md:text-5xl">Settings</p>
                    <p className="text-sm text-gray-400 md:text-base">
                        Manage your account
                    </p>
                </div>

                <ProfileFetch />
            </div>
        </section>
    );
}

export default Page;
