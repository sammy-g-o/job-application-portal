import React from "react";
import Bookmark from "./bookmark";
import { Link } from "react-router-dom";

function Job({ job }) {
  return (
    <li>
      <article className="p-6 flex flex-col gap-6 rounded-2xl w-full bg-white shadow-card">
        <div className="flex justify-between">
          <img src={null} alt="" />
          <div className="">
            <Link to={`/jobs/:${job.jobId}`}>
              <h3 className="font-headline font-bold text-lg text-primary">
                Product Strategy Lead
              </h3>
            </Link>
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
    </li>
  );
}

export default Job;
