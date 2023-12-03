import NavbarHome from "@/src/components/global/navbar/navbar-home";

function Layout({ children }) {
    return (
        <>
            <NavbarHome />
            <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
                <main className="flex-1 ">{children}</main>
            </div>
        </>
    );
}

export default Layout;
