import { BiBookmark } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-4 py-3 rounded-xl text-sm font-headline font-semibold uppercase flex gap-4 items-center ${
    isActive
      ? "bg-[#D1FAE5] text-primary"
      : "text-text-regular hover:bg-[#D1FAE5]"
  }`;
function SideNav({ isOpen, onOpenSideNav, setIsOpen }) {
  function handleCloseSideNav() {
    setIsOpen(false);
  }
  return (
    <section
      className={`side-nav ${isOpen ? "open" : ""} -translate-x-full transition-all ease-in-out h-dvh z-50 w-dvw fixed top-0 bg-transparent lg:hidden`}
    >
      <nav className="w-4/5 h-dvh rounded-r-2xl bg-[#F8FAFC] p-8 flex flex-col gap-8 z-50">
        <div className="flex justify-between w-full">
          <NavLink onClick={handleCloseSideNav} to="/" className="">
            The Curator
          </NavLink>
          <div className="" onClick={onOpenSideNav}>
            <FaX color="" />
          </div>
        </div>
        <ul className="flex flex-col gap-1">
          <li className="">
            <NavLink
              onClick={handleCloseSideNav}
              to="/dashboard"
              className={navLinkClass}
            >
              <MdOutlineDashboard />
              Dashboard
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={handleCloseSideNav}
              to="/jobs"
              className={navLinkClass}
            >
              <FaSearch />
              Find Jobs
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={handleCloseSideNav}
              to="/companies"
              className={navLinkClass}
            >
              <FaSearch />
              Companies
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={handleCloseSideNav}
              to="/saved"
              className={navLinkClass}
            >
              <BiBookmark />
              Saved
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default SideNav;
