"use client";

import BookCrad from "@/src/components/shared/BookCrad";
import { BooksContext } from "@/src/context/BooksContext";
import { Ibook } from "@/src/types/books.typs";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => Number(b.rating) - Number(a.rating));
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <main className="min-h-screen bg-slate-50/70">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 py-14 text-center shadow-sm sm:px-10">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-teal-200/30 blur-2xl" />

          <div className="relative">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-600 shadow-sm">
              📚 Your Collection
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Listed Books
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Keep track of the books you have read and the ones you want to
              read next.
            </p>
          </div>
        </section>

        {/* Sort Section */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              My Book Collection
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {readBooks.length + wishlist.length} books in your collection
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-slate-500 sm:block">
              Sort by
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "rating" | "pages" | "year")
              }
              className="select select-bordered h-12 rounded-xl border-slate-200 bg-white px-5 font-medium text-slate-700 shadow-sm outline-none focus:border-emerald-400"
            >
              <option value="rating">⭐ Rating</option>
              <option value="pages">📖 Number of Pages</option>
              <option value="year">📅 Published Year</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="tabs tabs-lift">
            {/* Read Books */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab font-semibold"
              aria-label={`Read Books (${readBooks.length})`}
              defaultChecked
            />

            <div className="tab-content rounded-b-2xl border-slate-200 bg-white p-4 sm:p-6">
              {sortedReadBooks.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {sortedReadBooks.map((book: Ibook) => (
                    <BookCrad key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl bg-slate-50 text-center">
                  <div className="mb-4 text-5xl">📚</div>

                  <h3 className="text-xl font-bold text-slate-800">
                    No read books yet
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Start reading a book and it will appear here.
                  </p>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab font-semibold"
              aria-label={`Wishlist (${wishlist.length})`}
            />

            <div className="tab-content rounded-b-2xl border-slate-200 bg-white p-4 sm:p-6">
              {sortedWishlist.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {sortedWishlist.map((book: Ibook) => (
                    <BookCrad key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl bg-slate-50 text-center">
                  <div className="mb-4 text-5xl">♡</div>

                  <h3 className="text-xl font-bold text-slate-800">
                    Your wishlist is empty
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Add books you want to read later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListedBooks;
