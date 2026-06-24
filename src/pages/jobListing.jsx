import { useState } from "react";
import Bookmark from "../components/bookmark";
import Job from "../components/job";

const FILTERS = ["All Jobs", "Full-time", "Remote", "Contract"];
function JobListing({ Jobs }) {
  const [activeFilter, setActiveFilter] = useState("All Jobs");

  return (
    <main className="lg:flex lg:flex-row lg:gap-6 lg:px-16 lg:py-12">
      <aside className="hidden lg:flex flex-col flex-1"></aside>
      <section className="flex flex-col gap-8 w-full lg:flex-3">
        <section className="w-full flex flex-col gap-2">
          <h1 className="font-extrabold font-headline text-4xl text-primary">
            Curated Openings
          </h1>
          <p className="text-sm text-text-regular">
            Exclusive opportunities meticulously selected for the executive
            professional.
          </p>
        </section>
        <section className="w-full">
          <div className="w-full overflow-x-auto flex gap-4 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`flex-none py-2.5 px-5 rounded-full font-semibold text-sm ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-surface-elevated text-text-regular"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>
        <section className="job-feed w-full flex flex-col gap-6 flex-1">
          <article className="bg-primary rounded-2xl p-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <div className="bg-primary-dark py-1 px-3 rounded-lg font-bold text-[10px] text-[#80BEA6]">
                  Hot Opportunity
                </div>
                <Bookmark color="#80BEA6" id="hot-opportunity-cco" />
              </div>
              <div className="">
                <h3 className="font-headline font-bold text-2xl text-white">
                  Chief Creative Officer
                </h3>
                <p className="text-sm text-[#80BEA6]">
                  Vanguard Studio • Paris, France
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-lg text-white">$180k – $240k</p>
                <button className="rounded-xl text-sm text-primary-dark bg-white py-1 px-3 font-bold">
                  Apply Now
                </button>
              </div>
            </div>
          </article>
          <ul className="flex flex-col gap-2.5">
            {Jobs.map((job) => (
              <Job key={job.jobId} job={job} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default JobListing;
