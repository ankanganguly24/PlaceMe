import NavbarHome from "@/src/components/global/navbar/navbar-home";

function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden">
            <NavbarHome />
            
            <main className="flex-1 ">{children}</main>
        </div>
    );
}

export default Layout;
