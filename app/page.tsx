import type { Metadata } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import "./globals.css";
import Link from "next/link";

import Image from "next/image";
import Servers from "./components/Servers";

//TODO: add
export const metadata: Metadata = {
  title: "Harem: Project Maid",
  description:
    "Welcome to Harem: Project Maid. Collect and trade to build your perfect harem. Discover the rarity of each card and rise in the global ranking. ¡Join our community and have fun!",
};

export default function Page() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-start justify-center min-h-[80vh] p-8 max-w-7xl mx-auto mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto">
          <div className="md:w-[30vw] mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-[#d946ef] mb-3 uppercase">
              An Online Anime Card Game
            </h1>
            <p className="text-lg text-[#eee] font-bold mb-6">
              Welcome to{" "}
              <span className="text-[#4361ee]">Harem: Project Maid</span>.
              Collect and trade to build your perfect harem. Discover the rarity
              of each card and rise in the global ranking. Join our passionate
              Anime & Manga community! ✨
            </p>

            <div className="flex space-x-5">
              <Link
                href="https://discord.gg/tzHte7vBWv"
                target="_blank"
                className="py-2 px-6 bg-[#5865F2] text-white rounded-md hover:bg-[#4D5BF2] transform scale-100 hover:scale-105 transition-transform duration-300"
              >
                Discord
              </Link>
              <Link
                href="/play"
                className="py-2 px-4 border-2 border-[#c026d3] text-white rounded-md transform scale-100 hover:scale-105 transition-transform duration-300"
              >
                Play Now
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-end float-right">
            <Image
              src="/assets/waifu.jpg"
              alt="Waifu"
              width={470}
              height={682}
              className="ml-auto mr-0 img-waifu"
            />
          </div>
        </div>
      </main>

      <Servers />
    </>
  );
}
