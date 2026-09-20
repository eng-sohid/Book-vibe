import React from "react";
import Image from "next/image";
import Logo from "../../assets/book.ico";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="navbar container mx-auto min-h-20 px-4">
        {/* Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-4 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
            >
              <li>
                <a className="rounded-xl py-3 font-medium">Home</a>
              </li>

              <li>
                <a className="rounded-xl py-3 font-medium">Listed Books</a>
              </li>

              <li>
                <a className="rounded-xl py-3 font-medium">Pages to Read</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
              <Image src={Logo} alt="Book Vibe logo" width={28} height={28} />
            </div>

            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Book<span className="text-emerald-500">Vibe</span>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            <li>
              <a className="rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-600 bg-emerald-50">
                Home
              </a>
            </li>

            <li>
              <a className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                Listed Books
              </a>
            </li>

            <li>
              <a className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                Pages to Read
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end gap-2">
          <button className="hidden rounded-xl border border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 sm:block">
            Sign In
          </button>

          <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
