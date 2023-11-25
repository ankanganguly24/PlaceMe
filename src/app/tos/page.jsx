import React from "react";

function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="border-b-2 border-gray-300 bg-white py-4 text-center">
                <h1 className="text-3xl font-bold">PlaceMe Terms of Service</h1>
            </header>

            <main className="mx-auto max-w-2xl p-4">
                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">
                        Acceptance of Terms
                    </h2>
                    <p>
                        Welcome to PlaceMe, a placement management software
                        provided by [Your Company Name]. By using our software,
                        you agree to comply with and be bound by these Terms of
                        Service.
                    </p>
                </section>

                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">
                        Use of Service
                    </h2>
                    <p>
                        You agree to use PlaceMe solely for its intended
                        purposes and in compliance with all applicable laws and
                        regulations. Prohibited activities include but are not
                        limited to:
                    </p>
                    <ul className="mt-2 list-disc pl-6">
                        <li>Violating any laws or third-party rights.</li>
                        <li>
                            Interfering with the proper functioning of the
                            software.
                        </li>
                        <li>Unauthorized access or use of accounts or data.</li>
                    </ul>
                </section>

                <section className="my-4 rounded-md bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about these Terms
                        of Service, please contact us at [Your contact
                        information].
                    </p>
                </section>
            </main>

            <footer className="border-t-2 border-gray-300 bg-white py-4 text-center">
                <p>Last Updated: [Insert Date]</p>
            </footer>
        </div>
    );
}

export default TermsOfService;
