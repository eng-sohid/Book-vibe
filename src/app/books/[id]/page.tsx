import { Ibook } from "@/src/types/books.typs";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReadButton from "@/src/components/BookDetails/ReadButton";
import WishlistButton from "@/src/components/BookDetails/WishlistButton";

interface IbookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};
const BookDetailsPage = async ({ params }: IbookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();

  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(id),
  ) as Ibook;

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf9ff]">
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white bg-white/80 shadow-[0_25px_80px_-20px_rgba(88,28,135,0.25)] backdrop-blur-xl">
          {/* Background Glow */}
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-5">
            {/* ================= BOOK COVER ================= */}
            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f1e8ff] via-[#faf5ff] to-[#ffeaf5] p-8 lg:col-span-2 lg:min-h-[700px] lg:p-14">
              {/* Decorative circles */}
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-purple-200/60" />
              <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-pink-200/60" />

              {/* Book shadow */}
              <div className="absolute h-[430px] w-[280px] rounded-2xl bg-purple-500/20 blur-3xl" />

              {/* Book */}
              <div className="relative z-10">
                <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl bg-purple-400/20 blur-xl" />

                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={430}
                  height={600}
                  priority
                  className="relative max-h-[570px] w-auto rounded-2xl object-contain shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-3 hover:rotate-1"
                />
              </div>

              {/* Floating rating */}
              <div className="absolute right-6 top-8 z-20 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md">
                <span className="text-xl text-yellow-400">★</span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {book.rating}
                  </p>
                  <p className="text-[10px] text-gray-400">Rating</p>
                </div>
              </div>

              {/* Floating pages */}
              <div className="absolute bottom-8 left-6 z-20 rounded-2xl border border-white/70 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-md">
                <p className="text-xs text-gray-400">Total Pages</p>
                <p className="font-bold text-gray-900">{book.totalPages}</p>
              </div>
            </div>

            {/* ================= DETAILS ================= */}
            <div className="relative p-7 sm:p-10 lg:col-span-3 lg:p-14 xl:p-16">
              {/* Top */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-600">
                  {book.category}
                </span>

                <span className="text-sm font-medium text-gray-400">
                  Book #{book.bookId}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-md">
                  {book.author.charAt(0)}
                </div>

                <div>
                  <p className="text-xs text-gray-400">Written by</p>

                  <p className="font-bold text-gray-800">{book.author}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-purple-200 via-pink-200 to-transparent" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Rating
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl text-yellow-400">★</span>
                    <span className="text-xl font-black text-gray-900">
                      {book.rating}
                    </span>
                  </div>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Pages
                  </p>

                  <p className="mt-2 text-xl font-black text-gray-900">
                    {book.totalPages}
                  </p>
                </div>

                <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Published
                  </p>

                  <p className="mt-2 text-xl font-black text-gray-900">
                    {book.yearOfPublishing}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Explore Genres
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 text-sm font-semibold text-purple-600 transition hover:border-purple-200 hover:shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* About */}
              <div className="mt-9">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-6 w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />

                  <h2 className="text-xl font-bold text-gray-900">
                    About this book
                  </h2>
                </div>

                <p className="max-w-3xl text-[15px] leading-8 text-gray-500">
                  {book.review}
                </p>
              </div>

              {/* Bottom Info */}
              <div className="mt-9 rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Publisher
                    </p>

                    <p className="mt-1 font-bold text-gray-800">
                      {book.publisher}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Category
                    </p>

                    <p className="mt-1 font-bold text-gray-800">
                      {book.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ReadButton book={book} />
                <WishlistButton book={book} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
