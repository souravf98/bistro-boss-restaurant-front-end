import React from "react";
import { FaUser, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:px-16 sm:px-3 mx-auto bg-slate-950 w-full sticky top-0 z-[999]">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a> Contact us</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <Link to="/ourMenu">Our Menu</Link>
              </li>
              <li>
                <Link to="/ourShop">Our Shop</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a> Contact us</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <Link to="/ourMenu">Our Menu</Link>
            </li>
            <li>
              <Link to="/ourShop">Our Shop</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:gap-4">
          <a className="btn">
            <FaCartArrowDown />
          </a>
          <a className="btn">
            Sign out <FaUser />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
