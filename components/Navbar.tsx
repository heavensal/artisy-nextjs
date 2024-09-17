"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/"className="text-white">Login</Link>
      <Link href="/skills"
         className="text-white">Skills
      </Link>
      <Link href="/about" className="text-white">About
      </Link>
    </nav>
  );
}
