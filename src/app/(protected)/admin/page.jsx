import AdminProfile from "@/src/components/admin/adminprofile";
import { getApplicants } from "@/src/lib/mongo/applicant";
import { getJobs } from "@/src/lib/mongo/post";
import { getAllUsers } from "@/src/lib/mongo/user";

async function Page() {
    const jobs = await getJobs();
    const applicants = await getApplicants();
    const users = await getAllUsers();

    return <AdminProfile jobs={jobs} applicants={applicants} users={users} />;
}

export default Page;
