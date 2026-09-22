import React from "react";
import Image from "next/image";
import { Ibook } from "@/src/types/books.typs";
import Link from "next/link";

interface IbookCardProps {
  book: Ibook;
}

const BookCrad = ({ book }: IbookCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image + Info */}
      <div className="flex gap-5">
        {/* Book Image */}
        <div className="h-48 w-32 shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={book.image}
            alt={book.bookName}
            width={800}
            height={600}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          {/* Category */}
          <span className="w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
            {book.category}
          </span>

          {/* Book Name */}
          <h3 className="mt-3 text-xl font-bold text-gray-900">
            {book.bookName}
          </h3>

          {/* Author */}
          <p className="mt-1 text-sm text-gray-500">{book.author}</p>

          {/* Rating + Pages */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-gray-700">
              ⭐ {book.rating}
            </span>

            <span className="text-gray-300">|</span>

            <span className="text-gray-500">📖 {book.totalPages} pages</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
        <div>
          <p className="text-sm font-medium text-gray-600">
            🏛️ {book.publisher}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Published: {book.yearOfPublishing}
          </p>
        </div>

        {/* Button */}

        <Link href={`/books/${book.bookId}`}>
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCrad;
