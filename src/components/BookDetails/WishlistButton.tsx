"use client";

import { BooksContext } from "@/src/context/BooksContext";
import { Ibook } from "@/src/types/books.typs";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book?: Ibook } = {}) => {
  const context = useContext(BooksContext);

  if (!context || !book) {
    return null;
  }

  const { wishlist, setWishlist, readBooks } = context;

  const handleWishlist = () => {
    // বইটি আগে থেকেই Read List-এ থাকলে Wishlist-এ এড হতে দেবে না
    const isAlreadyRead = readBooks?.some(
      (item: Ibook) => String(item.bookId) === String(book.bookId),
    );

    if (isAlreadyRead) {
      alert(
        `You have already read "${book.bookName}"! Cannot add to Wishlist.`,
      );
      return;
    }

    // Wishlist-এ আগে থেকেই আছে কিনা চেক
    const isExist = wishlist?.some(
      (item: Ibook) => String(item.bookId) === String(book.bookId),
    );

    if (isExist) {
      alert(`"${book.bookName}" is already in your Wishlist!`);
      return;
    }

    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to Wishlist`);
  };

  return (
    <button
      className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-95 transition"
      onClick={handleWishlist}
    >
      Add to wishlist
    </button>
  );
};

export default WishlistButton;
