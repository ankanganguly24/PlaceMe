"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ProfilePage() {
    const { signOut } = useClerk();
    const router = useRouter();

    const handleLogout = () => {
        signOut()
            .then(() => {
                router.push("/");
                toast.success("See you soon!");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Something went wrong!");
            });
    };

    return <Button onPress={handleLogout}>Logout</Button>;
}

export default ProfilePage;
