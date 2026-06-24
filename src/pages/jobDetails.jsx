import { useParams } from "react-router-dom";
import { Ajax } from "../helper";
import { useEffect, useState } from "react";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await Ajax(`/api/jobs/${id}`);
        setJob(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    loadJobs();
  }, [id]);

  return (
    <main>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between"></div>
        <div className="flex flex-col gap-2">
          <h1 className="font-headline font-extrabold text-3xl text-primary">
            {job.jobTitle}
          </h1>
          <span className="text-lg text-text-regular">
            {job.companyName} • {job.location}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-lg bg-surface-elevated">
            Full-time
          </div>
          <div className="px-3 py-1 rounded-lg bg-surface-elevated">Remote</div>
          <div className="px-3 py-1 rounded-lg bg-surface-elevated">
            Executive
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-headline font-bold text- text-primary">The Role</h2>
        <p className="text-text-regular"></p>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="font-headline font-bold text-xl text-primary">
          Requirements
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="text-text-regular">
            10+ years of experience in product design at scale.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default JobDetails;
