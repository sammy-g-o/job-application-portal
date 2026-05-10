import { useState } from "react";

function Header() {
  const [showHamburger, setShowHamburger] = useState(true);
  function transformHamburger() {
    setShowHamburger((prev) => !prev);
  }
  return (
    <header className="w-full flex items-center h-17 px-6">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-12.5 items-center">
          <button className="flex items-center p-2" onClick={transformHamburger} aria-label="Menu">
            <div
              className={`hamburger menu w-4.5 h-3 relative ${showHamburger ? "closed" : "open"}`}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
          <div className="flex items-center text-lg font-black text-primary font-headline">The Curator</div>
        </div>
        <div className="w-9 h-9 rounded-[100%] overflow-hidden flex items-center justify-center"></div>
      </div>
    </header>
  );
}

export default Header;
