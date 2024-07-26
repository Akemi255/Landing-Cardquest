import React from "react";
import Image from "next/image";
import Link from "next/link";

import ServerCard from "@/components/cards/ServerCard";

export default function Servers() {
  // TODO: Adding async function to get discord member or update manually

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#d946ef] mb-2">
          Partners Servers
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Explore more servers or see the ones that support us!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/servers"
            className="py-2 px-6 bg-[#d946ef] text-white rounded-md hover:bg-[#c125e0] transform scale-100 hover:scale-105 transition-transform duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
