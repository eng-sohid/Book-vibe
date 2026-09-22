"use client";

import { BooksContext } from "@/src/context/BooksContext";
import { Ibook } from "@/src/types/books.typs";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    alert(`You have read"${book.bookName}"`);
  };
  return (
    <button
      className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 px-7 font-bold text-white shadow-lg shadow-purple-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
