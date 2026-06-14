"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

export default function BentoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
       {/* Navigation Bar */}
            <nav className="relative flex justify-between items-center bg-[#FF7A00] rounded-2xl px-6 md:px-8 py-6 mb-4">
              {/* Logo */}
              <Link
                href="/home"
                className="text-xl font-bold tracking-tight text-black hover:opacity-70"
              >
                GODSWILL <span className="font-normal opacity-80">IKPEAMAH</span>
              </Link>
      
              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 font-medium text-black text-sm">
                <Link href="/projects" className="hover:opacity-70">
                  PROJECTS
                </Link>
                <Link href="/about" className="hover:opacity-70">
                  ABOUT
                </Link>
                <Link href="/contact" className="hover:opacity-70">
                  CONTACT
                </Link>
              </div>
      
              {/* Mobile Burger Button */}
              <button
                className="md:hidden text-black"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
      
              {/* Mobile Menu */}
              {menuOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-[#FF7A00] rounded-2xl shadow-lg flex flex-col gap-6 px-6 py-6 md:hidden z-50">
                  <Link
                    href="/projects"
                    onClick={() => setMenuOpen(false)}
                    className="font-medium text-black"
                  >
                    PROJECTS
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="font-medium text-black"
                  >
                    ABOUT
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="font-medium text-black"
                  >
                    CONTACT
                  </Link>
                </div>
              )}
            </nav>

     {/* Page Header */}
      <div className="bg-[#FF7A00] rounded-3xl p-10 mb-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-black leading-tight"
        style={{
                    fontFamily: "Protest Revolution",
                  }}
        >
          Selected <br />
          <span className="italic font-light">Projects</span>
        </h1>
        <p className="mt-4 text-black max-w-xl font-medium"

        >
          A curated selection of products I’ve designed — focused on clarity,
          usability, and purposeful experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Project 1 */}

      <Link href="/projects/jebota"className="group md:col-span-6 block"
>
  <div className="bg-[#006D36] rounded-3xl p-6 flex flex-col cursor-pointer">

    <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
      <Image
        src="/jebota-case.png"
        alt="Jebota"
        fill
        className="object-cover"
      />

       <a
    href="https://your-jebota-url.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white text-[#006D36] text-sm font-semibold hover:opacity-90 transition"
    onClick={(e) => e.stopPropagation()}
  >
    Visit Website ↗
  </a>
  
    </div>

    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-semibold text-white">Jebota</h3>
        <p className="text-white opacity-80 mt-1">Lead Designer</p>
      </div>
      <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>

  </div>
</Link>


        {/* Project 2 */}
           <Link href="/projects/medxverse"className="group md:col-span-6 block"
>
        <div className="md:col-span-6 bg-[#1D2264] rounded-3xl p-6 flex flex-col group text-white">
          <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
            <Image src="/me.png" alt="me" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold">Medxverse</h3>
              <p className="opacity-70 mt-1">Lead Designer</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
        </Link>

       
        {/* Project 3 */}
                <Link href="/projects/babanawa"className="group md:col-span-6 block"
>      
<div className="md:col-span-4 bg-[#02346D] rounded-3xl p-6 flex flex-col justify-between group">
  <div>
    <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">
      <Image src="/cover picture.png" alt="uni" fill className="object-cover" />
    </div>

    <h3 className="text-xl font-semibold text-white">
      Babanawa University
    </h3>
    <p className="text-white opacity-80 mt-1">Lead Designer</p>
  </div>

  <div className="flex justify-end mt-0">
    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </div>
</div>
</Link> 

        {/* Project 4 */}
                      <Link href="/projects/blivap"className="group md:col-span-6 block"
>   
        <div className="md:col-span-8 bg-[#960018] rounded-3xl p-6 flex flex-col justify-between group">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">
            <Image src="/bv2.png" alt="bli" fill className="object-cover" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-semibold text-white">Blivap</h3>
              <p className="text-white opacity-80 mt-1">Lead Designer</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
         </Link>

      </div>
    </div>
   
  );
}
     