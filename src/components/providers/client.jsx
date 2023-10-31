"use client";

import { NextUIProvider } from "@nextui-org/system";

function ClientProvider({ children }) {
    return <NextUIProvider>{children}</NextUIProvider>;
}

export default ClientProvider;
