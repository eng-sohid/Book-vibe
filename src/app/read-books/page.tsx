"use client";

import { BooksContext } from "@/src/context/BooksContext";
import { Ibook } from "@/src/types/books.typs";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#6366F1",
  "#10B981",
  "#F59E0B",
  "#F97316",
  "#EF4444",
  "#EC4899",
  "#8B5CF6",
];

type BarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
};

const getPath = (x: number, y: number, width: number, height: number) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x = 0, y = 0, width = 0, height = 0, index = 0 } = props;

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={color}
      stroke={color}
      strokeWidth={0}
    />
  );
};

const CustomColorLabel = (props: any) => {
  const { x, y, value } = props;

  return (
    <text
      x={x}
      y={y}
      dy={-10}
      textAnchor="middle"
      fill="#0f172a"
      fontSize={13}
      fontWeight={700}
    >
      {value}
    </text>
  );
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: Ibook) => {
    return {
      name: book.bookName,
      pages: book.totalPages,
      year: book.yearOfPublishing,
      publisher: book.publisher,
    };
  });

  const totalPages = readBooks.reduce(
    (total: number, book: Ibook) => total + book.totalPages,
    0,
  );

  const averagePages =
    readBooks.length > 0 ? Math.round(totalPages / readBooks.length) : 0;

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-5 py-2 shadow-sm">
            <span className="text-lg">📊</span>

            <span className="text-sm font-bold text-indigo-600">
              Reading Analytics
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            My Reading{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Progress
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Track your reading journey and see how many pages you have completed
            across your books.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Books Read */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Books Read
                </p>

                <h3 className="mt-2 text-4xl font-black text-slate-900">
                  {readBooks.length}
                </h3>

                <p className="mt-1 text-sm text-slate-400">Completed books</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                📚
              </div>
            </div>
          </div>

          {/* Total Pages */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Total Pages
                </p>

                <h3 className="mt-2 text-4xl font-black text-slate-900">
                  {totalPages}
                </h3>

                <p className="mt-1 text-sm text-slate-400">Pages completed</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                📖
              </div>
            </div>
          </div>

          {/* Average Pages */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Average Pages
                </p>

                <h3 className="mt-2 text-4xl font-black text-slate-900">
                  {averagePages}
                </h3>

                <p className="mt-1 text-sm text-slate-400">Pages per book</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl">
                📈
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Chart Header */}
          <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Pages by Book
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your reading progress at a glance
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
              📚 {readBooks.length} Books
            </div>
          </div>

          {/* Chart Area */}
          <div className="w-full overflow-x-auto p-5 sm:p-8">
            {readBooks.length > 0 ? (
              <BarChart
                style={{
                  width: "100%",
                  minWidth: "650px",
                  maxWidth: "100%",
                  height: "420px",
                }}
                responsive
                data={data}
                margin={{
                  top: 35,
                  right: 20,
                  left: 10,
                  bottom: 60,
                }}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12,
                    fill: "#64748b",
                  }}
                  tickLine={false}
                  axisLine={false}
                  angle={-15}
                  textAnchor="end"
                  height={70}
                />

                <YAxis
                  tick={{
                    fontSize: 12,
                    fill: "#64748b",
                  }}
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  cursor={{
                    fill: "#f8fafc",
                  }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    padding: "12px 16px",
                    boxShadow: "0 15px 35px rgba(15, 23, 42, 0.12)",
                  }}
                  labelStyle={{
                    color: "#0f172a",
                    fontWeight: 700,
                    marginBottom: "5px",
                  }}
                  formatter={(value) => [`${value} pages`, "Pages"]}
                />

                <Bar dataKey="pages" shape={<TriangleBar />}>
                  <LabelList
                    dataKey="pages"
                    content={<CustomColorLabel />}
                    position="top"
                  />
                </Bar>
              </BarChart>
            ) : (
              /* Empty State */
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
                  📚
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  No books read yet
                </h3>

                <p className="mt-2 max-w-md text-sm text-slate-500">
                  Start reading a book and your reading statistics will appear
                  here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReadBooks;
