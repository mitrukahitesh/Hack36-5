import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  
  return (
    <div className="py-10 md:py-14 md:pb-5 navbar">
      <nav className="fixed inset-x-0 top-0 z-20 px-2 text-sm border-gray-200 pt-1 bg-white">
        <div className="flex flex-wrap items-center justify-between py-1 mx-5 sm:mx-14">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="KalaKriti Logo"
              className="w-16 h-16 pt-2 md:w-16 md:h-16 md:pt-0"
            />
          </Link>
          <button
            className="inline-flex float-right p-3 ml-auto text-white rounded outline-none hover:text-white lg:hidden"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto mt-4`}
          >
          {/*
            <ul className="flex flex-col items-start w-full lg:ml-16 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
              <li className="py-1">
                <div className="relative group">
                  <button className="items-center justify-center w-full px-4 py-2 font-bold text-white rounded hover:text-white lg:inline-flex lg:w-auto">
                    <span>
                      Buy Crypto&nbsp;
                    </span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-white group-hover:block">
                    <Link
                      to="/DepositPage"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      <i className="fa-solid fa-building-columns"></i>
                      Deposit
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Credit/Debit Card
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Cash Balance
                    </Link>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="relative group">
                  <button
                    href="/"
                    className="items-center justify-center w-full px-4 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-white"
                  >
                    <span>Trade&nbsp;</span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-white group-hover:block">
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Convert
                    </Link>
                    <Link
                      to="/GraphPage"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Coin Graph
                    </Link>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="relative group">
                  <button
                    href="/"
                    className="items-center justify-center w-full px-4 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-white"
                  >
                    <span>Learn&nbsp;</span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-white group-hover:block">
                    <Link
                      to="/Blogs"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/Videos"
                      className="block px-4 py-2 font-bold text-white hover:bg-white hover:text-custom-blue"
                    >
                      Videos
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          */}
            <div className="flex flex-row items-start w-full lg:ml-auto lg:w-auto lg:h-auto">
              <Link
                to="/Login"
                className="items-center justify-center w-auto px-4 py-2 mb-3 font-bold rounded text-custom-blue bg-white lg:inline-flex hover:bg-custom-blue hover:text-white hover:ring-2 hover:ring-white"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="items-center justify-center w-auto px-4 py-2 mb-3 font-bold rounded text-custom-blue bg-white lg:inline-flex hover:bg-custom-blue hover:text-white hover:ring-2 hover:ring-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
