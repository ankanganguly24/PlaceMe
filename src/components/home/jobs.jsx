import Jobcard from "./job-card";

const jobs = [
    {
        title: "Senior Frontend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://images.unsplash.com/photo-1620338635-4b0b0f5b4b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
        title: "Senior Backend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://images.unsplash.com/photo-1620338635-4b0b0f5b4b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
        title: "Senior Fullstack Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://images.unsplash.com/photo-1620338635-4b0b0f5b4b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
        title: "Senior Frontend Developer",
        description:
            "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
        // Write a random epoch time in milliseconds
        createdAt: 1620338635,
        image: "https://images.unsplash.com/photo-1620338635-4b0b0f5b4b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
];

function Jobs() {
    return (
        <section className="flex items-center justify-center p-5">
            <div className="w-full max-w-6xl ">
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
