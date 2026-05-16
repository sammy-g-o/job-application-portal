import { useState } from "react";
import Bookmark from "../components/bookmark";

const FILTERS = ["All Jobs", "Full-time", "Remote", "Contract"];
function JobListing() {
  const [activeFilter, setActiveFilter] = useState("All Jobs");

  return (
    <main className="flex flex-col gap-8 h-[calc(100dvh-68px)]">
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
              <Bookmark color="#80BEA6" />
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
        <article className="p-6 flex flex-col gap-6 rounded-2xl w-full bg-white shadow-card">
          <div className="flex justify-between">
            <img src={null} alt="" />
            <div className="">
              <h3 className="font-headline font-bold text-lg text-primary">
                Product Strategy Lead
              </h3>
              <p className="text-sm text-text-regular">Aura Systems • Remote</p>
            </div>
            <Bookmark color="#BFC9C3" />
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-[#4C6359] font-semibold">
              $140k – $165k
            </div>
            <div className="font-bold text-[10px] text-[#707974] bg-[#f3f4f5] px-2 py-1">
              2 Days Ago
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default JobListing;
