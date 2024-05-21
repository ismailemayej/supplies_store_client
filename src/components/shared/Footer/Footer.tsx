import Link from "next/link";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-slate-700 text-white">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="text-center lg:bg-primary-100  border-warning-100 border p-4 rounded-3xl">
              <span className="lg:text-2xl  px-10 py-2">Washing</span>
              <br />
              <span className="text-4xl  px-1 my-6">Supplied</span>
              <br />
              <span className="text-2xl  px-14 py-1 mt-10">Store</span>
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li className="hover:bg-white hover:text-black rounded-md hover:shadow-md px-4 py-2">
              <Link
                href="/trending-products"
                className=" transition hover: /75"
              >
                {" "}
                Trending Products{" "}
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-md hover:shadow-md px-4 py-2">
              <Link
                href="/categories/all-category"
                className=" transition hover: /75"
              >
                {" "}
                Categories{" "}
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-md hover:shadow-md px-4 py-2">
              <Link href="/about-us" className=" transition hover: /75">
                {" "}
                About{" "}
              </Link>
            </li>

            <li className="hover:bg-white hover:text-black rounded-md hover:shadow-md px-4 py-2">
              <Link className="  transition hover: /75" href="/contact-us">
                {" "}
                Contact Us{" "}
              </Link>
            </li>

            <li className="hover:bg-white hover:text-black rounded-md hover:shadow-md px-4 py-2">
              <Link className="  transition hover: /75" href="/customer-care">
                {" "}
                Customer Care{" "}
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm lg:text-right">
          Copyright &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
