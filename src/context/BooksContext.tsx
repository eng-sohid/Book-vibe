"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Ibook } from "../types/books.typs";
interface IBookContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

export const BooksContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);

  const sharedData = { readBooks, setReadBooks, wishlist, setWishlist };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
