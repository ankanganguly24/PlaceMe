function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="border-b-2 border-gray-300 bg-white py-4 text-center">
                <h1 className="text-3xl font-bold">PlaceMe Privacy Policy</h1>
            </header>

            <main className="mx-auto max-w-2xl p-4">
                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">Introduction</h2>
                    <p>
                        Welcome to PlaceMe, a placement management software
                        provided by [Your Company Name]. This Privacy Policy
                        explains how we collect, use, disclose, and safeguard
                        your information when you use our software.
                    </p>
                </section>

                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">
                        Information We Collect
                    </h2>
                    <p>
                        PlaceMe may collect various types of information from
                        users, including but not limited to:
                    </p>
                    <ul className="mt-2 list-disc pl-6">
                        <li>
                            Personal information (such as name, email, contact
                            details) provided by users.
                        </li>
                        <li>
                            Usage data and analytics collected automatically
                            when using our software.
                        </li>
                        <li>
                            Information obtained from third parties or publicly
                            available sources.
                        </li>
                    </ul>
                    
                </section>

            

                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy
                        Policy, please contact us at [Your contact information].
                    </p>
                    
                </section>
            </main>

            <footer className="border-t-2 border-gray-300 bg-white py-4 text-center">
                <p>Last Updated: 14-11-2023</p>
                
            </footer>
        </div>
    );
}

export default PrivacyPolicy;
