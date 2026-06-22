import { useState } from "react";
import { Link } from "react-router-dom";
import Bookmark from "../components/bookmark";

function LandingPage({ jobs }) {
  const jobCategories = ["design", "dev", "growth", "manufacturing"];
  const [searchJobs, setSearchJobs] = useState({
    jobTitle: "",
    location: "",
  });

  function handleJobSearchInput(e, inputName) {
    setSearchJobs((jobName) => ({
      ...jobName,
      [`${inputName}`]: e.target.value,
    }));
  }
  console.log(jobs);
  return (
    <main className="flex flex-col gap-12">
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
              value={searchJobs.jobTitle}
              onChange={(e) =>
                handleJobSearchInput(e, e.target.attributes[5].value)
              }
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
              value={searchJobs.location}
              onChange={(e) =>
                handleJobSearchInput(e, e.target.attributes[5].value)
              }
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
              <div className="flex flex-col items-center gap-1.5">
                <img src={`/svg/${category}.svg`} alt="" />
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
          <ul className="flex flex-col gap-3">
            {jobs.map((job) => (
              <li>
                <article
                  className="recommended-job p-6 flex flex-col gap-[22.8px] border-[#BFC9C31A] rounded-4xl w-full"
                  key={job.jobId}
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-4">
                      <img src={null} alt="" />
                      <div className="">
                        <h3 className="font-bold font-headline text-[#191c1d]">
                          {job.jobTitle}
                        </h3>
                        <p className="text-sm text-text-regular">
                          {job.companyName}
                        </p>
                      </div>
                    </div>
                    <Bookmark color="#BFC9C3" />
                  </div>
                  <div className="">
                    <span className=""></span>
                  </div>
                  <div className="">
                    <p className="text-sm text-text-regular">
                      {job.description}
                    </p>
                  </div>
                  <div className="w-full pt-[25.2px] border-t-[#EDEEEF] flex justify-between">
                    <span>Posted 2h ago</span>
                    <button className="bg-primary-dark py-2 px-6 rounded-xl font-bold text-sm text-white">
                      Apply Now
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="highlights w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full h-48 rounded-4xl p-6 relative flex overflow-hidden items-end bg-[url('/images/modern-office.png')] bg-size-[100%_100%]">
            <div className="left-0 w-full h-full absolute top-0 bg-primary/85"></div>
            <div className="z-10">
              <h4 className="font-headline font-bold text-xl text-white">
                Executive Search
              </h4>
              <span className="text-[#80BEA6] text-sm ">
                Unlock exclusive leadership roles
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="rounded-4xl p-6 bg-accent-soft flex-1 font-bold font-headline text-sm text-[#50685D]">
              <img src="/svg/verified.svg" alt="" />
              <p>
                Vetted <br /> Companies
              </p>
            </div>
            <div className="rounded-4xl p-6 h-auto flex-1 bg-[#E1E3E4] font-bold font-headline text-sm text-[#191C1D]">
              <img src="/svg/fast.svg" alt="" />
              <span>Fast-track Hiring</span>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-newsletter w-full">
        <div className="w-full flex items-center justify-center bg-primary-dark rounded-[40px] p-8">
          <form className="flex flex-col gap-6 items-center justify-center">
            <div className="">
              <h2 className="font-headline font-bold text-2xl text-white text-center">
                The Weekly Brief
              </h2>
              <p className="text-sm text-[#80BEA6CC] text-center">
                Hand-picked opportunities delivered to your inbox every Monday
                morning.
              </p>
            </div>
            <div className="w-full">
              <label htmlFor="newsletter-email"></label>
              <input
                type="email"
                className="rounded-2xl px-6 py-4.5 bg-[#FFFFFF1A] text-[#80BEA680] w-full"
                placeholder="Email address"
                id="newsletter-email"
                name="newsletterEmail"
              />
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="rounded-2xl px-6 py-4.5 w-full bg-[#B0F0D6] text-primary-dark font-bold text-xs text-center"
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
