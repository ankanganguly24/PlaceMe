import Jobcard from "./job-card";

const jobs = [
    {
        title: "Senior Frontend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://picsum.photos/seed/picsum/200/200",
    },
    {
        title: "Senior Backend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://picsum.photos/seed/picsum/200/200",
    },
    {
        title: "Senior Fullstack Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://picsum.photos/seed/picsum/200/200",
    },
    {
        title: "Senior Frontend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://picsum.photos/seed/picsum/200/200",
    },
];

function Jobs() {
    return (
        <section className="flex items-center justify-center p-5">
            <div className="flex w-full max-w-6xl flex-col gap-5 ">
                {jobs.map((job, index) => (
                    <Jobcard
                        key={index}
                        title={job.title}
                        description={job.description}
                        image={job.image}
                        createdAt={job.createdAt}
                    />
                ))}
            </div>
        </section>
    );
}

export default Jobs;
