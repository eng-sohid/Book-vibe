"use client";

import React, { createContext, useState, ReactNode } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  const sharedData = { readBooks, setReadBooks, wishlist, setwishlist };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
