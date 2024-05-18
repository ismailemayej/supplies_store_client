"use client";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Navbar = () => {
  const user = "i";
  return (
    <div className="navbar bg-primary-100 text-white lg:px-3 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-primary-100 rounded-md w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-sm border-zinc-100 bg-orange-900"
        >
          <span className="lg:text-2xl text-xl text-primary-200">WS</span>
          <span className="lg:text-2xl text-xl text-white">Store</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end  ">
        {user ? (
          <Link
            className="btn btn-ghost text-xl border-zinc-100 bg-orange-900"
            href="/login"
          >
            <RiLogoutCircleRLine />
          </Link>
        ) : (
          <Link
            className="btn btn-ghost text-xl border-zinc-100 bg-orange-900"
            href="/logout"
          >
            <FaCircleUser />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
