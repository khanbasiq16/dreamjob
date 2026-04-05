"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SearchIcon = () => (
  <svg
    className="w-[15px] h-[15px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    className="w-[22px] h-[22px] text-[#0f1c2e]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-[#e3e9f0] sticky top-0 z-[100] w-full">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between  items-center h-14 gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-6 flex-shrink-0">
            <div className=" rounded-full flex items-center justify-center overflow-hidden relative">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority
                className="object-contain p-1.5"
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "no-underline text-[13.5px] px-[10px] py-[6px] rounded-lg whitespace-nowrap transition-all",
                  link.active
                    ? " font-bold text-[#0154AA] "
                    : " font-medium text-[#737A91] hover:text-[#0154AA] hover:bg-[#e6f0fb]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-[10px] flex-shrink-0 ml-3">
            <div className="relative hidden sm:flex items-center">
              <span className="absolute left-[10px] text-[#8a97a8]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-20 py-[7px] text-[13px] border border-[#e3e9f0] rounded-lg bg-[#f0f4f9] text-[#0f1c2e] w-40 outline-none focus:border-[#0154AA] focus:shadow-[0_0_0_3px_rgba(1,84,170,0.12)] transition-all font-sans"
              />
            </div>
            <button className="hidden sm:block bg-[#0154AA] text-white text-[13px] font-semibold px-4 py-2 rounded-lg border-none cursor-pointer whitespace-nowrap hover:bg-[#013d7c] hover:-translate-y-px transition-all font-sans">
              Resume Builder
            </button>
            {/* <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-amber-400 to-red-500 border-2 border-[#cce0f5] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              AF
            </div> */}
            <div className="w-[34px] h-[34px] rounded-full  flex items-center justify-center flex-shrink-0 overflow-hidden relative bg-gray-100">
              <Image
                src="/profileimage.jpg"
                alt="Profile Picture"
                fill
                sizes="34px"
                className="object-cover"
                priority
              />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="flex md:hidden items-center justify-center bg-transparent border-none cursor-pointer p-[6px] rounded-lg ml-1"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 bg-white border-b border-[#e3e9f0] z-[99] flex flex-col p-3 pb-4 gap-1 shadow-md md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "no-underline text-sm px-3 py-[10px] rounded-lg transition-all",
                link.active
                  ? "font-bold text-[#0154AA] bg-[#e6f0fb]"
                  : "font-medium text-[#4b5a6e] hover:text-[#0154AA] hover:bg-[#e6f0fb]",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-[10px] flex-wrap pt-2 px-3">
            <div className="relative flex-1 min-w-[160px]">
              <span className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[#8a97a8]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-[30px] pr-10 py-2 text-[13px] border border-[#e3e9f0] rounded-lg bg-[#f0f4f9] text-[#0f1c2e] outline-none font-sans"
              />
            </div>
            <button className="flex-shrink-0 bg-[#0154AA] text-white text-[13px] font-semibold px-4 py-2 rounded-lg border-none cursor-pointer font-sans">
              Resume Builder
            </button>
          </div>
        </div>
      )}
    </>
  );
}

