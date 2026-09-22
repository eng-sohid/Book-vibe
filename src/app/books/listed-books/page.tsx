"use client";
import { BooksContext } from "@/src/context/BooksContext";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);
  return <div>Listed Books</div>;
};

export default ListedBooks;
