"use client";

import NavbarHome from "@/src/components/global/navbar/navbar-home";
import React from "react";

function Layout({ children }) {
    {
        React.useEffect(() => {
            document.body.style.overflowY = "hidden";

            return () => {
                document.body.style.overflowY = "auto";
            };
        }, []);
    }

    return (
        <>
            <NavbarHome />
            <div className="sticky mb-8 flex min-h-screen flex-col overflow-x-hidden bg-background">
                <main className="flex-1 ">{children}</main>
            </div>
        </>
    );
}

export default Layout;
