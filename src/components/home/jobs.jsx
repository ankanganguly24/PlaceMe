import { getJobs } from "@/src/lib/mongo/post";
import Jobcard from "./job-card";

// const jobs = [
//     // {
//     //     title: "Senior Frontend Developer",
//     //     description:
//     //         "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
//     //     createdAt: 1636881645000,
//     //     image: "https://picsum.photos/200/200",
//     // },
//     // {
//     //     title: "Senior Backend Developer",
//     //     description:
//     //         "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
//     //     createdAt: 1591372117000,
//     //     image: "https://picsum.photos/200/200",
//     // },
//     // {
//     //     title: "Senior Fullstack Developer",
//     //     description:
//     //         "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
//     //     createdAt: 1025063798000,
//     //     image: "https://picsum.photos/200/200",
//     // },
//     // {
//     //     title: "Senior Frontend Developer",
//     //     description:
//     //         "Design, develop, and deploy the next generation of our product, working closely with our engineers and product team.",
//     //     createdAt: 1075371950090,
//     //     image: "https://picsum.photos/200/200",
//     // },
// ];

async function Jobs() {
    const jobs = await getJobs();

    return (
        <section className="flex items-center justify-center p-8 ">
            <div className="flex w-full max-w-6xl flex-col items-center gap-8">
                {jobs.map((job, index) => (
                    <Jobcard
                        key={index}
                        title={job.title}
                        description={job.description}
                        id={job._id}
                        createdAt={job.createdAt}
                    />
                ))}
            </div>
        </section>
    );
}

export default Jobs;
