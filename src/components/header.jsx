import { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./sideNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenSideNav() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <header className="w-full flex items-center h-17 px-6">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-12.5 items-center">
            <button
              className="flex items-center p-2 lg:hidden"
              onClick={handleOpenSideNav}
              aria-label="Menu"
            >
              <div
                className={`hamburger menu w-4.5 h-3 relative ${isOpen ? "closed" : "open"}`}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
            <Link
              className="flex items-center text-lg font-black text-primary font-headline"
              aria-label="Home"
              to="/"
            >
              The Curator
            </Link>
          </div>
          <div className="w-9 h-9 rounded-[100%] overflow-hidden flex items-center justify-center"></div>
        </div>
      </header>
      <SideNav isOpen={isOpen} onOpenSideNav={handleOpenSideNav} />
    </>
  );
}

export default Header;
