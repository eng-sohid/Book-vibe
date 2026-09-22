"use client";

import React from "react";
import { usePathname } from "next/navigation";

const GlobalLoading = () => {
  const pathname = usePathname();

  let pageName = "Loading";

  if (pathname === "/") {
    pageName = "Home";
  } else if (pathname === "/books") {
    pageName = "Books";
  } else if (pathname === "/books/listed-books") {
    pageName = "Listed Books";
  } else if (pathname === "/read-books") {
    pageName = "Pages to Read";
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-emerald-500" />

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-slate-800">
          {pageName} Loading...
        </h2>

        <p className="mt-2 text-sm text-slate-500">Please wait a moment</p>
      </div>
    </div>
  );
};

export default GlobalLoading;
