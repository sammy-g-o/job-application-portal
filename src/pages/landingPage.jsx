import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const jobCategories = ["design", "dev", "growth"];
  useEffect(() => {
    document.addEventListener("keydown", (e) => console.log(e.key));
    return document.removeEventListener('keydown', (e) => console.log(e.key))
  }, []);

  return (
    <main className="px-6 w-full bg-surface-primary flex flex-col gap-12">
      <section className="landing-hero flex flex-col gap-6 pt-4 w-full">
        <span className="rounded-full py-1 px-3 bg-accent-soft w-fit font-semibold text-[12px] text-[#50685D]">
          ELEVATED CAREER SEARCH
        </span>
        <p className="font-headline font-extrabold text-4xl text-primary align-middle">
          Your career, meticulously curated.
        </p>
        <div className="flex gap-4 w-full">
          <div className="rounded-2xl p-4 bg-surface-elevated flex items-center justify-center flex-1">
            <div className="">
              <p className="font-bold font-headline text-3xl align-middle text-primary-dark">
                12k+
              </p>
              <p className=" font-medium text-[#404944] text-sm">
                Active Roles
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-4 bg-primary flex items-center justify-center flex-1">
            <div className="">
              <p className="font-bold font-headline text-3xl align-middle text-white">
                450
              </p>
              <p className="font-medium text-[#80BEA6] text-sm">Top Partners</p>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-search">
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            id="job-title"
            name="jobTitle"
            className="landing-search__inputs"
            placeholder="Job title or keyword"
          />
          <input
            type="text"
            id="location"
            name="location"
            className="landing-search__inputs"
            placeholder="location"
          />
          <input
            type="submit"
            id="search-jobs"
            name="searchJobs"
            className="bg-primary p-4 rounded-2xl w-full text-white text-center font-bold"
            value="Explore Opportunities"
          />
        </form>
      </section>
      <section className="landing-categories w-full flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="font-headline font-bold text-xl text-[#191C1D]">
            Browse Sectors
          </p>
          <button className="text-primary font-semibold text-sm">
            View all
          </button>
        </div>
        <div className="w-full overflow-hidden flex gap-6">
          {jobCategories.map((category) => (
            <Link
              className="rounded-3xl w-28 h-28 flex justify-center items-center bg-white text-[#404944] font-bold text-[11px] uppercase"
              aria-label={`${category} category`}
              to="#"
              key={crypto.randomUUID()}
            >
              <div className="">
                {/* <svg>
                  <use href={`/svg/${category}.svg` & null}></use>
                </svg> */}
                {category}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
