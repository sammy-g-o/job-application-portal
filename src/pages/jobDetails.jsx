function JobDetails() {
  return (
    <main>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between"></div>
        <div className="flex flex-col gap-2">
          <h1 className="font-headline font-extrabold text-3xl text-primary">
            Principal Product Designer
          </h1>
          <span className="text-lg text-text-regular">
            Stripe • San Francisco, CA
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
