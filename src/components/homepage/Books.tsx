import React from "react";
import BookCrad from "../shared/BookCrad";
import { Ibook } from "@/src/types/books.typs";
import booksData from "@/public/booksData.json";

const Books = () => {
  const books: Ibook[] = booksData as Ibook[];

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-600">
          📚 Our Collection
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Books{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            That Inspire
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Discover amazing books, explore new worlds, and dive into stories that
          stay with you forever.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.length > 0 ? (
          books.map((book: Ibook, ind: number) => {
            return <BookCrad key={book.bookId || ind} book={book} />;
          })
        ) : (
          <p className="col-span-full text-center text-lg font-semibold text-gray-500">
            No books available right now.
          </p>
        )}
      </div>
    </section>
  );
};

export default Books;
