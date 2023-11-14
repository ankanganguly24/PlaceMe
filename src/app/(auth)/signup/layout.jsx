function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden">
            <main className="flex-1 ">{children}</main>
        </div>
    );
}

export default Layout;
