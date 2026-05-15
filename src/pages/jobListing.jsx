function JobListing() {
  function handleFilterButtonColor(e) {
    if (e.target.tagName !== "BUTTON") return;
    e.currentTarget.querySelectorAll("button").forEach((btn) => {
      btn.classList.add("bg-surface-elevated");
      btn.classList.remove("bg-primary", "text-white");
    });
    e.target.classList.remove("bg-surface-elevated");
    e.target.classList.add("bg-primary", "text-white");
  }
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
          onClick={handleFilterButtonColor}
        >
          <button className="flex-none py-2.5 px-5 rounded-full font-semibold text-sm text-text-regular bg-surface-elevated">
            All Jobs
          </button>
          <button className="flex-none py-2.5 px-5 rounded-full font-semibold text-sm text-text-regular bg-surface-elevated">
            Full-time
          </button>
          <button className="flex-none py-2.5 px-5 rounded-full font-semibold text-sm text-text-regular bg-surface-elevated">
            Remote
          </button>
          <button className="flex-none py-2.5 px-5 rounded-full font-semibold text-sm text-text-regular bg-surface-elevated">
            Contract
          </button>
        </div>
      </section>
    </main>
  );
}

export default JobListing;
