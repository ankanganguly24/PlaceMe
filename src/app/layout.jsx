import ClientProvider from "../components/providers/client";

export const metadata = {
    title: "PlaceMe",
    description: "PlaceMe is a platform for finding and listing jobs.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientProvider>{children}</ClientProvider>
            </body>
        </html>
    );
}
