import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const jobCategories = ["design", "dev", "growth", "manufacturing"];
  useEffect(() => {
    document.addEventListener("keydown", (e) => console.log(e.key));
    return document.removeEventListener("keydown", (e) => console.log(e.key));
  }, []);

  return (
    <main className="px-6 w-full bg-surface-primary flex flex-col gap-12">
      <section className="landing-hero flex flex-col gap-6 pt-4 w-full">
        <span className="rounded-full py-1 px-3 bg-accent-soft w-fit font-semibold text-[12px] text-[#50685D]">
          ELEVATED CAREER SEARCH
        </span>
        <h1 className="font-headline font-extrabold text-4xl text-primary align-middle">
          Your career, meticulously curated.
        </h1>
        <div className="flex gap-4 w-full">
          <div className="rounded-2xl p-4 bg-surface-elevated flex items-center justify-center flex-1">
            <div className="">
              <p className="font-bold font-headline text-3xl align-middle text-primary-dark">
                12k+
              </p>
              <p className=" font-medium text-text-regular text-sm">
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
          <div className="">
            <label htmlFor="job-title" className="hidden"></label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              className="landing-search__inputs"
              placeholder="Job title or keyword"
            />
          </div>
          <div className="">
            <label htmlFor="location" className="hidden"></label>
            <input
              type="text"
              id="location"
              name="location"
              className="landing-search__inputs"
              placeholder="location"
            />
          </div>
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
          <h2 className="font-headline font-bold text-xl text-[#191C1D]">
            Browse Sectors
          </h2>
          <button className="text-primary font-semibold text-sm">
            View all
          </button>
        </div>
        <div className="w-full overflow-x-auto flex gap-6 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent">
          {jobCategories.map((category) => (
            <Link
              className="rounded-3xl w-28 h-28 flex justify-center items-center bg-white text-text-regular font-bold text-[11px] uppercase flex-none"
              aria-label={`${category} category`}
              to="#"
              key={category}
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
      <section className="landing-recommended">
        <div className="">
          <h2 className="font-bold text-xl font-headline text-[#191c1d]">
            Recommended for You
          </h2>
          <article className="recommended-job p-6 flex flex-col gap-[22.8px] border-[#BFC9C31A] rounded-4xl w-full">
            <div className="flex justify-between w-full">
              <div className="flex gap-4">
                <img src="" alt="" />
                <div className="">
                  <h3 className="font-bold font-headline text-[#191c1d]">
                    Lead UX Strategist
                  </h3>
                  <p className="text-sm text-text-regular">Stellar Systems</p>
                </div>
              </div>
              <button className="w-fit h-fit" aria-label="bookmark job">
                <svg width="14px" height="18px">
                  <use href="/public/svg/bookmark.svg"></use>
                </svg>
              </button>
            </div>
            <div className="">
              <span className=""></span>
            </div>
            <div className="">
              <p className="text-sm text-text-regular">
                Looking for a design leader to orchestrate high-fidelity user
                journeys for our next-gen fintech platform...
              </p>
            </div>
            <div className="w-full pt-[25.2px] border-t-[#EDEEEF] flex justify-between">
              <span>Posted 2h ago</span>
              <button className="bg-primary-dark py-2 px-6 rounded-xl font-bold text-sm text-white">
                Apply Now
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
