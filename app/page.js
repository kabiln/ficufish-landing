'use client'

import Image from "next/image";
import Font from "next/font/google";
import Lottie from "lottie-react";
import animationData from "../public/ficufish.json";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row row-auto items-center sm:items-center-safe">
          <Lottie
          className="w-32"
          animationData={animationData}
          loop={true}
          />
          <h1 className="font-montserrat text-5xl font-light tracking-[-.01em] text-center sm:text-left">
            ficufish
          </h1>
        </div>
        <ol className="font-mono list-inside list-none text-sm/6 text-center sm:text-left w-xl">
          <li className="mb-2 tracking-[-.01em]">
            We research and develop innovative solutions empowering people and organizations worldwide to create thriving circular economies.
          </li>
        </ol>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
     
      </footer>
    </div>
  );
}
