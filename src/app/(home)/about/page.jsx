import mission1 from "@/public/mission-01.svg";
import value1 from "@/public/value-01.svg";
import vision1 from "@/public/vision-01.svg";
import { Image } from "@nextui-org/react";

function About() {
    return (
        <section>
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="max-w-4xl rounded-lg bg-white p-8 shadow-lg">
                    <h1 className="mb-4 text-center text-3xl font-bold text-primary">
                        About Us
                    </h1>
                    <p className="mb-6 text-gray-600">
                        Welcome to our job portal! We are dedicated to
                        connecting talented individuals with exciting career
                        opportunities.
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-xl">
                            <Image
                                className="pointer-events-none pt-3"
                                src={vision1.src}
                                alt="vision"
                                width={400}
                                height={400}
                                priority
                            />
                            <h2 className="mb-2 text-xl font-bold text-primary">
                                Our Mission
                            </h2>
                            <p className="text-gray-600">
                                To make the job search process seamless and
                                enjoyable, providing both employers and job
                                seekers with a platform that fosters growth and
                                success.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-xl">
                            <Image
                                className="pointer-events-none pt-3"
                                src={mission1.src}
                                alt="mission"
                                width={400}
                                height={400}
                                priority
                            />
                            <h2 className="mb-2 text-xl font-bold text-primary">
                                Our Vision
                            </h2>
                            <p className="text-gray-600">
                                To redefine the way people find and build their
                                careers by creating a dynamic and inclusive job
                                portal.
                            </p>
                        </div>

                        <div className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-xl">
                            <Image
                                className="pointer-events-none pt-3"
                                src={value1.src}
                                alt="value"
                                width={400}
                                height={400}
                                priority
                            />
                            <h2 className="mb-2 text-xl font-bold text-primary">
                                Our Values
                            </h2>
                            <p className="text-gray-600">
                                Integrity, Innovation, Collaboration, and
                                Empowerment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
