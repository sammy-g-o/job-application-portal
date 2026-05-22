import { FaFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <main className="pt-18">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-headline font-extrabold text-3xl text-primary-dark">Welcome Back</h1>
          <p className="font-medium text-text-regular">Continue your journey with the Emerald
Executive network.</p>
        </div>
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-semibold text-sm text-text-regular uppercase"
            >
              Email Address
            </label>
            <input
              type="text"
              className="py-4.5 px-5 rounded-xl bg-surface-elevated text-[#70797466]"
              placeholder="executive@emerald.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-semibold text-sm text-text-regular uppercase"
            >
              Password
            </label>
            <input
              type="password"
              className="py-4.5 px-5 rounded-xl bg-surface-elevated text-[#70797466]"
            />
          </div>
          
          <button type="submit" className="p-4 rounded-xl text-white font-semibold text-lg bg-linear-[99.95deg] from-[#003527] to-[#064E3B]">Sign in</button>
        </form>
        <div className=""></div>
        <div className="flex flex-col gap-4">
          <Link className="flex gap-3 justify-center  items-center py-3.5 bg-white rounded-xl">
            <GrGoogle /> Google
          </Link>
          <Link className="flex justify-center gap-3  items-center py-3.5 bg-white rounded-xl">
            <LiaLinkedin/> LinkedIn
          </Link>
        </div>
        <p className="flex gap-1">
          New to Emerald Executive?
          <Link className="text-primary-dark font-semibold">Create an account</Link>
        </p>
      </section>
    </main>
  );
}

export default SignIn;
