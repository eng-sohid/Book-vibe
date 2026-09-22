"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/book.ico";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="navbar container mx-auto min-h-20 px-4">
          {/* Logo + Mobile Menu */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <Link
                    href="/"
                    className={`rounded-xl py-3 font-medium ${
                      isActive("/")
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books"
                    className={`rounded-xl py-3 font-medium ${
                      isActive("/books")
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600"
                    }`}
                  >
                    Books
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books/listed-books"
                    className={`rounded-xl py-3 font-medium ${
                      isActive("/books/listed-books")
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600"
                    }`}
                  >
                    Listed Books
                  </Link>
                </li>

                <li>
                  <Link
                    href="/read-books"
                    className={`rounded-xl py-3 font-medium ${
                      isActive("/read-books")
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600"
                    }`}
                  >
                    Pages to Read
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <Image src={Logo} alt="Book Vibe logo" width={28} height={28} />
              </div>

              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Book<span className="text-emerald-500">Vibe</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive("/")
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive("/books")
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/books/listed-books"
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive("/books/listed-books")
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/read-books"
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isActive("/read-books")
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="navbar-end gap-2">
            {/* Sign In */}
            <button
              onClick={() => setShowSignIn(true)}
              className="hidden rounded-xl border border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 sm:block"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              onClick={() => setShowSignUp(true)}
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* ================= SIGN IN MODAL ================= */}
      {showSignIn && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Image src={Logo} alt="Book Vibe" width={35} height={35} />
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to continue to BookVibe
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email or Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter email or phone"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                Sign In
              </button>
            </form>

            <button
              onClick={() => setShowSignIn(false)}
              className="mt-4 w-full rounded-xl py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ================= SIGN UP MODAL ================= */}
      {showSignUp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Image src={Logo} alt="Book Vibe" width={35} height={35} />
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join BookVibe and start your reading journey
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email or Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter email or phone"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                Create Account
              </button>
            </form>

            <button
              onClick={() => setShowSignUp(false)}
              className="mt-4 w-full rounded-xl py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
