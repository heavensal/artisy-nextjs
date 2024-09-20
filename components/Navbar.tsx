"use client";
import Link from "next/link";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";

export default function Navbar({ session }: { session: Session | null }) {

  const { data: session } = useSession()
  return (
    session?.user ? (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/skills" className="text-white">Skills</Link>
        <Link href="/dashboard" className="text-white">Dashboard</Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </nav>
    ) : (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/login" className="text-white">Login</Link>
        <Link href="/skills" className="text-white">Skills</Link>
      </nav>
    )
  );
}
