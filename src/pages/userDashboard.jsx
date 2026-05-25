import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <main className="pt-16 flex flex-col gap-8">
      <section>
        <h1 className="font-headline text-3xl font-extrabold text-primary-dark">
          Welcome back, Alex.
        </h1>
        <p className="font-medium text-text-regular">
          Your career curation is 85% complete.
        </p>
      </section>
      <section className="flex flex-col gap-4 w-full">
        <div className="w-full">
          <div className="flex flex-col flex-2 p-6 rounded-3xl bg-primary-dark w-full">
            <p className="text-sm uppercase text-white">Applied</p>
            <p className="font-headline font-extrabold text-3xl text-white">
              12
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-1 p-6 rounded-3xl bg-accent-soft">
            <p className="uppercase text-sm text-[#50685D]">Interviewing</p>
            <p className="font-extrabold text-3xl text-[#50685D]">04</p>
          </div>
          <div className="flex flex-col flex-1 p-6 rounded-3xl bg-surface-elevated">
            <p className="uppercase text-sm text-text-regular">offered</p>
            <p className="font-extrabold text-3xl text-text-regular">01</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-headline font-bold text-xl text-primary-dark">
            Recent Applications
          </h2>
          <Link className="text-primary font-semibold text-sm">View all</Link>
        </div>
        <ul className="flex gap-3 flex-col">
          <li className="p-5 gap-4 rounded-xl flex">
            <div className="">
              <img src={null} alt="" />
            </div>
            <div className="">
              <h3 className="font-bold font-headline text-[#191C1D]">
                Senior UX Architect
              </h3>
              <p className="text-sm text-text-regular">Design Studio Co.</p>
            </div>
            <div className="">
              <span className="px-2 py-1 bg-[#D1FAE5] rounded-md uppercase text-[10px]">
                Interviewing
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-bold font-headline text-xl text-primary-dark">
          Saved for Later
        </h2>
        <div className="overflow-x-auto w-full flex gap-4">
          <article className="rounded-2xl b p-5 flex flex-col gap-2 bg-white">
            <div className="flex"></div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#191C1D]">Design Director</h4>
              <p className="text-text-regular text-xs">Aura Agency • London</p>
            </div>
            <p className="text-primary">$140k - $180k</p>
          </article>
        </div>
      </section>
      <section className="w-full h-64 p-8 relative rounded-2xl overflow-hidden bg-[url('/images/professional-woman.png')] bg-size-[100%_100%]">
       <div className="w-full bg-[linear-gradient(0deg,rgba(0,53,39,0.9)_0%,rgba(0,53,39,0.2)_50%,rgba(0,53,39,0)_100%)] h-64 absolute top-0 left-0"></div>
        <div className="flex flex-col gap-2">
          <div className="px-3 py-1 bg-[#4F1F19] w-fit rounded-full text-white uppercase text-[10px]">
            expert insight
          </div>
          <h3 className="font-headline font-extrabold text-2xl text-white">
            Mastering the Executive Interview
          </h3>
          <p className="text-sm text-[#D1FAE5CC]">
            Elevate your presence and command the room with our curated guide
            for top-tier roles.
          </p>
        </div>
      </section>
    </main>
  );
}

export default UserDashboard;
