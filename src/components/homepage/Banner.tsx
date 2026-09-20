import React from "react";
import Image from "next/image";
import bannerImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="relative grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-16 lg:py-16">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                📚 Discover Your Next Favorite Book
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Books to
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  freshen up
                </span>
                your bookshelf
              </h1>

              <p className="max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                Explore amazing books, discover new stories, and build a
                collection that makes your bookshelf truly yours.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-400/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-300">
                  View The List →
                </button>

                <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                  Explore Books
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <Image
                  src={bannerImg}
                  alt="Books collection"
                  className="h-auto w-full max-w-md rounded-2xl object-cover transition duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
