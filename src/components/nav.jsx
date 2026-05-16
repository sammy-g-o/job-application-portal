import { NavLink } from "react-router-dom";

function Nav() {
  const handleActiveNav = ({ isActive }) =>
    `font-bold text-sm ${isActive ? "text-[#047857]" : "text-text-regular"}`;

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/jobs" className={handleActiveNav}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/companies" className={handleActiveNav}>
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={handleActiveNav}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
