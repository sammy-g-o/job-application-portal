import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <header className="w-full flex justify-between items-center px-8 h-20">
        <div className="font-semibold text-2xl text-primary-dark">
          The Curator
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <span className="text-sm font-medium text-text-regular">
            Already have an account?
          </span>
          <Link className="text-primary-dark font-semibold text-sm">
            Sign In
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AuthLayout;
