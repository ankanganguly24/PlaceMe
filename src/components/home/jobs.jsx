import { getJobs } from "@/src/lib/mongo/post";
import Jobcard from "./job-card";

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
