import { ClerkProvider } from "@clerk/nextjs";

function ServerProvider({ children }) {
    return <ClerkProvider>{children}</ClerkProvider>;
}

export default ServerProvider;
