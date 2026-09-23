import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/book.ico";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src={Logo}
                alt="Book Vibe Logo"
                width={42}
                height={42}
                className="rounded-xl"
              />

              <span className="text-2xl font-black text-white">
                Book<span className="text-emerald-400">Vibe</span>
              </span>
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Discover amazing books, keep track of your reading journey, and
              build your personal collection with Book Vibe.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition hover:bg-emerald-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition hover:bg-emerald-500 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition hover:bg-emerald-500 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition hover:bg-emerald-500 hover:text-white"
              >
                GH
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-emerald-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition hover:text-emerald-400"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/books/listed-books"
                  className="transition hover:text-emerald-400"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/read-books"
                  className="transition hover:text-emerald-400"
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Support</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-emerald-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-emerald-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-emerald-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-emerald-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>

            <p>
              Made with <span className="text-emerald-400">♥</span> for book
              lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
