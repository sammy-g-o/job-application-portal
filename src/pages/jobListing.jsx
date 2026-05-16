import { useState } from "react";

const FILTERS = ["All Jobs", "Full-time", "Remote", "Contract"];

function JobListing() {
  const [activeFilter, setActiveFilter] = useState("All Jobs");

  return (
    <main className="flex flex-col gap-8">
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
        <div
          className="w-full overflow-x-auto flex gap-4 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent"
        >
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
    </main>
  );
}

export default JobListing;
