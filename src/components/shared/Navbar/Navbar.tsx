"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Navbar = () => {
  const menu = [
    {
      name: "Dashboard",
      link: "/dashboard/category?category=Floor%20Cleaners",
    },
    {
      name: "All Category",
      link: "/categories/all-category",
    },
  ];

  const user = null;
  return (
    <>
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
              className="menu  menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-primary-100 rounded-md w-52"
            >
              {menu.map((item: any, index) => (
                <li key={index} className=" rounded-lg hover:bg-orange-900">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
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
          <ul className="menu menu-horizontal px-1 text-lg ">
            {menu.map((item: any, index) => (
              <li key={index} className=" rounded-lg hover:bg-orange-800">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end  ">
          <Input
            classNames={{
              base: "lg:block hidden max-w-full sm:max-w-[10rem] h-10 mr-2 bg-slate-50 bg-neutral-200 rounded-lg",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="product search...Floor Cleaner,tiels cleaner etc..."
            size="sm"
            startContent={<Search />}
            type="search"
          />
          <ThemeSwitcher />
          {user ? (
            <Link className="btn btn-ghost text-2xl max-w- " href="/logout">
              <RiLogoutCircleRLine />
            </Link>
          ) : (
            <Link className="btn btn-ghost text-2xl" href="/login">
              <FaCircleUser />
            </Link>
          )}
        </div>
      </div>
      <div className="lg:hidden  mx-8 mt-2">
        <Input
          classNames={{
            base: " border max-w-full sm:max-w-[10rem] h-10 mr-2 bg-slate-50 bg-neutral-200 rounded-lg",
            mainWrapper: "h-full",
            input: "text-lg",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Product search... Floor Cleaner,tiels cleaner etc..."
          size="sm"
          startContent={<Search />}
          type="search"
        />
      </div>
    </>
  );
};

export default Navbar;
