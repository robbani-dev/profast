"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? " font-semibold bg-primary rounded-full text-neutral" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export const links = (
  <>
    <li>
      <NavLink href="/rider">Be a Rider</NavLink>
    </li>
    <li>
      <NavLink href="/pricing">Pricing</NavLink>
    </li>
    <li>
      <NavLink href="/aboutUs">About Us</NavLink>
    </li>
    <li>
      <NavLink href="/consignment">Track Order</NavLink>
    </li>
    <li>
      <NavLink href="/addParcel">Add Parcel</NavLink>
    </li>
    <li>
      <NavLink href="/serviceArea">Service Area</NavLink>
    </li>
  </>
);

{
  /* <li>
    <details>
        <summary>Parent</summary>
        <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul>
    </details>
</li>
<li><a>Item 3</a></li> */
}
const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm base-container rounded-2xl mt-[2%] lg:mt-[1%] lg:px-[1%]">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/authentication/login" className="btn btn-primary">
          {" "}
          Login{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
