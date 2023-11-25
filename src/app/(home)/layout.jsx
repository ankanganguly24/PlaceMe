import Footer from "@/src/components/global/footer/footer";
import NavbarHome from "@/src/components/global/navbar/navbar-home";

function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden">
            <NavbarHome />
            <main className="flex-1 ">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
