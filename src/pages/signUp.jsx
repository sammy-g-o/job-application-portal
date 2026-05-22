import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleSignUpDetailsInput = function (e, elName) {
    setSignUpDetails((prev) => ({ ...prev, [elName]: e.target.value }));
  };
  return (
    <main className="w-full pt-23">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-10 p-8 b bg-white rounded-3xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary-dark font-bold font-headline text-2xl">
              Begin your ascent
            </h1>
            <span className="text-text-regular text-[16px] font-medium">
              Step 1: Account Essentials
            </span>
          </div>
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="fullName"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                FULL NAME
              </label>
              <input
                type="text"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="fullName"
                name="full name"
                value={signUpDetails.fullName}
                onChange={(e) => handleSignUpDetailsInput(e, "fullName")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="email"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                Executive Email
              </label>
              <input
                type="text"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="email"
                name="email"
                value={signUpDetails.email}
                onChange={(e) => handleSignUpDetailsInput(e, "email")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="password"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                Password
              </label>
              <input
                type="password"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="password"
                name="password"
                value={signUpDetails.password}
                onChange={(e) => handleSignUpDetailsInput(e, "password")}
              />
            </div>
            <button
              type="submit"
              className="bg-primary p-5 rounded-xl font-headline font-bold text-white flex gap-4 justify-center items-center"
            >
              Continue to Profile
              <FaArrowRightLong fill="white" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
