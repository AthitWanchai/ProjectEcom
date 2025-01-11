"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

     return (
          <nav className="bg-white shadow-lg relative z-50">
               <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    {/* Logo and "หน้าแรก" */}
                    <div className="flex items-center gap-8">
                         {/* Logo Section */}
                         <div className="text-2xl font-bold text-green-500">
                              <Link href="/">MyApp</Link>
                         </div>
                    </div>

                    {/* Hamburger Menu (Mobile View) */}
                    <div className="lg:hidden">
                         <button
                              type="button"
                              className="text-gray-700 focus:outline-none"
                              onClick={() => setMenuOpen(!menuOpen)}
                         >
                              <svg
                                   className="w-6 h-6"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth="2"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                         </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                         className={`${menuOpen ? "absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6 z-50" : "hidden"
                              } lg:flex lg:items-center lg:gap-8 lg:w-auto w-full lg:relative lg:top-0 lg:bg-transparent lg:shadow-none lg:py-0 lg:px-0`}
                    >
                         <Link
                              href="/"
                              className="block lg:block text-md font-semibold text-gray-700 hover:text-green-500 p-2 rounded-lg transition duration-300 ease-in-out"
                         >
                              หน้าแรก
                         </Link>
                         <Link
                              href="#tracking"
                              className="block lg:inline-block text-md font-semibold text-gray-700 hover:text-green-500 mx-2 p-2 rounded-lg transition duration-300 ease-in-out"
                         >
                              ติดตามการสั่งซื้อ
                         </Link>
                         <Link
                              href="#marketplace"
                              className="block lg:inline-block text-md font-semibold text-gray-700 hover:text-green-500 mx-2 p-2 rounded-lg transition duration-300 ease-in-out"
                         >
                              ประกาศซื้อขาย
                         </Link>
                    </div>
               </div>
          </nav>
     );
}
