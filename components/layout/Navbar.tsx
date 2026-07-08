"use client";

import Link from "next/link";
import { GitBranch } from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-gray-400 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          <GitBranch className="h-7 w-7" />
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors"
          >
            RepoLens
          </Link>
        </div>

        {/* Center */}
        <div className="hidden w-full max-w-md px-6  md:block">
          <SearchBar/>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-600 transition-colors"
          >
            Compare
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors"
          >
            About
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-neutral-800 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;