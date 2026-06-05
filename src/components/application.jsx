import React from "react";

function Application() {
  return (
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
  );
}

export default Application;
