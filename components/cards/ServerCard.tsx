import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServerCard({
  serversCount,
  membersCount,
}: {
  serversCount: number;
  membersCount: number;
}) {
  return (
    <Link
      href="#"
      target="_blank"
      className="bg-[#2a2d35] p-6 rounded-lg shadow-lg flex items-center transform scale-100 hover:scale-105 transition-transform duration-300"
    >
      <Image
        src="/assets/logo.jpg"
        alt="Server 1"
        width={64}
        height={64}
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-[#fff]">
          Server {serversCount}
        </h3>
        <p className="text-gray-300">{membersCount} members</p>
      </div>
    </Link>
  );
}
