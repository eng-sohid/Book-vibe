"use client";

import { BooksContext } from "@/src/context/BooksContext";
import { Ibook } from "@/src/types/books.typs";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book?: Ibook } = {}) => {
  const context = useContext(BooksContext);

  if (!context || !book) {
    return null;
  }

  const { readBooks, setReadBooks } = context;

  const handleRead = () => {
    const isExist = readBooks?.some(
      (item: Ibook) => String(item.bookId) === String(book.bookId),
    );

    if (isExist) {
      alert(`"${book.bookName}" is already in your Read List!`);
      return;
    }

    setReadBooks([...readBooks, book]);
    toast.success(`You have added "${book.bookName}" to Read List`);
  };

  return (
    <button
      className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition"
      onClick={handleRead}
    >
      Read
    </button>
  );
};

export default ReadButton;
