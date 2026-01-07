"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="text-2xl font-bold text-white">Travila</div>

        <nav className="hidden md:flex gap-8 text-xl font-medium text-white">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/flights" className="hover:text-yellow-400 transition">
            Flights
          </Link>
          <Link href="/deals" className="hover:text-yellow-400 transition">
            Deals
          </Link>
          <Link href="/blog" className="hover:text-yellow-400 transition">
            Blog
          </Link>
        </nav>

        <button className="bg-yellow-400 text-black text-md px-5 py-2 rounded-md hover:bg-yellow-500 transition">
          Login
        </button>
      </div>
    </header>
  );
}
