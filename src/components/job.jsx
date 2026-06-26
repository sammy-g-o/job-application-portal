import Bookmark from "./bookmark";
import { Link, useLocation } from "react-router-dom";
import { formatCurrency, timeAgo } from "../helper";

function Job({ job }) {
  // Example: Currency formatting
  // const formatter = new Intl.NumberFormat("en-NG", {
  //   style: "currency",
  //   currency: job.currency,
  // });
  const location = useLocation();
  return (
    <li>
      <article className="p-6 flex flex-col gap-6 rounded-2xl w-full bg-white shadow-card">
        <div className="flex justify-between">
          <img src={null} alt="" />
          <div className="">
            <Link
              to={
                location.pathname !== "/saved"
                  ? `/jobs/${job.jobId}`
                  : `/saved/${job.jobId}`
              }
            >
              <h3 className="font-headline font-bold text-lg text-primary">
                {job.jobTitle}
              </h3>
            </Link>
            <p className="text-sm text-text-regular">
              {job.companyName} • {job.location}{" "}
            </p>
          </div>
          <Bookmark color="#BFC9C3" id={job.jobId} />
        </div>
        <div className="flex justify-between">
          <div className="text-sm text-[#4C6359] font-semibold">
            {formatCurrency(job.currency, job.salary)}
            {/* {job.salary < 1_000_000
              ? `${job.salary / 1000}k`
              : `${(job.salary / 1_000_000).toFixed(1)}m`} */}
          </div>
          <div className="font-bold text-[10px] text-[#707974] bg-[#f3f4f5] px-2 py-1">
            {timeAgo(job.uploadedDate)}
          </div>
        </div>
      </article>
    </li>
  );
}

export default Job;
