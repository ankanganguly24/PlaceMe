"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function ClientProvider({ children }) {
    const router = useRouter();
    const [queryClient] = useState(() => new QueryClient());
    return (
        <NextUIProvider navigate={router.push}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </NextUIProvider>
    );
}

export default ClientProvider;
