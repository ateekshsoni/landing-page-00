import React from "react";

const Header = () => {
  return (
    <>
      <header className="px-4 py-2">
        <nav className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://clipground.com/images/sample-company-logo-png-2.png"
            alt=""
          />
          <ul className="flex items-center justify-center gap-3 text-gray-500 ">
            <li>Features</li>
            <li>About</li>
            <li>Resources</li>
            <li>Why PhoneStore</li>
          </ul>
          <button className="px-4 py-1 text-gray-600 text-sm border">
            Login
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;