import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { BitFieldPermissions } from "./config/const";
import { hasPermission } from "./lib/utils";

export default authMiddleware({
    ignoredRoutes: [
        "/api/users",
        "/og.jpg",
        "/favicon.ico",
        "/robots.txt",
        "/sitemap.xml",
        "/site.webmanifest",
    ],
    publicRoutes: [
        "/",
        "/signin",
        "/signup",
        "/about",
        "/tos(.*)",
        "/privacy(.*)",
        "/sso-callback(.*)",
        "/verification(.*)",
    ],
    async afterAuth(auth, req) {
        const url = new URL(req.nextUrl.origin);

        if (auth.isPublicRoute) {
            if (
                auth.userId &&
                ["/signin", "/signup", "/verification"].includes(
                    req.nextUrl.pathname
                )
            ) {
                url.pathname = "/profile";
                return NextResponse.redirect(url);
            } else return NextResponse.next();
        }

        if (!auth.userId) {
            url.pathname = "/signup";
            return NextResponse.redirect(url);
        }

        const user = await clerkClient.users.getUser(auth.userId);
        if (!user) throw new Error("User not found!");

        if (
            (!user.privateMetadata.roles ||
                !user.privateMetadata.roles.length) &&
            !user.privateMetadata.permissions
        ) {
            await clerkClient.users.updateUserMetadata(auth.userId, {
                privateMetadata: {
                    roles: ["user"],
                    permissions: 1,
                },
            });
        }

        if (req.nextUrl.pathname.startsWith("/admin")) {
            if (
                hasPermission(
                    user.privateMetadata.permissions,
                    BitFieldPermissions.Administrator
                )
            )
                return NextResponse.next();
            else if (
                hasPermission(
                    user.privateMetadata.permissions,
                    BitFieldPermissions.ViewPrivatePages
                )
            )
                return NextResponse.next();
            else
                return NextResponse.json({
                    code: 403,
                    message: "Forbidden!",
                });
        }

        return NextResponse.next();
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
