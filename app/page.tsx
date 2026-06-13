"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]">
        {/* Headline Card */}
        <div className="md:col-span-5 bg-[#FF7A00] rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden min-h-[400px]">
          <div className="absolute top-8 right-8 opacity-40">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                fill="none"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-black leading-tight"
           style={{
                    fontFamily: "Bricolage Grotesque",
                  }}
          > 
           
            Shaping Intuitive <br />
            Experiences <br />
            through <br />
            <span className="font-light italic text-[4rem]">
              Purposeful UI/UX.
            </span>
          </h2>
        </div>

        {/* Profile Image */}
        <div className="md:col-span-3 relative min-h-[400px]">
          <Image
            src="/me.jpeg"
            alt="Godswill"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Values Card */}
        <div className="md:col-span-4 bg-[#FF7A00] rounded-3xl p-6 flex flex-col">
  <div className="flex justify-between items-start mb-4">
    <span className="font-bold text-black text-xl">Me!!</span>
    <ArrowUpRight size={24} />
  </div>

  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
    <Image src="/luffy.jpg" alt="Profile" fill className="object-cover" />
  </div>

  {/* Certificates Section */}
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-black">
      📜 My Certificates
    </h3>
    <p className="text-sm text-black/70">
      Click any certificate below to view it.
    </p>

    <a
      href="https://static.semrush.com/academy/certificates/08837657e5/godswill-ikpeamah_2.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-black pb-2 text-lg font-semibold hover:translate-x-1 transition-transform"
    >
      Semrush Digital Marketing Certificate ↗
    </a>

    <a
      href="/certificates/uiux-design.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-black pb-2 text-lg font-semibold hover:translate-x-1 transition-transform"
    >
      UI/UX Design Certificate ↗
    </a>

    <a
      href="/certificates/product-design.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-black pb-2 text-lg font-semibold hover:translate-x-1 transition-transform"
    >
      Product Design Certificate ↗
    </a>
  </div>
</div>

        {/* Bio Card */}
        <div className="md:col-span-4 bg-[#FF7A00] rounded-3xl p-8 flex flex-col justify-between">
          <p className="text-lg leading-relaxed text-black font-medium">
            Godswill Ikpeamah is a Senior UI/UX Designer crafting intuitive digital experiences at the intersection of emerging technology and human-centered design. He builds scalable digital solutions that connect users worldwide
          </p>
        </div>

        {/* Contact Card */}
<Link href="/contact" className="md:col-span-4">
  <div className="bg-[#262626] text-white rounded-3xl p-8 flex flex-col justify-between group cursor-pointer h-full">
    <div className="flex justify-between items-start">
      <p className="text-sm">
        Have some
        <br />
        questions?
      </p>
      <ArrowUpRight
        size={32}
        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
    </div>
    <h3 className="text-5xl font-bold">Contact me</h3>
  </div>
</Link>


        {/* Socials */}
        <div className="md:col-span-4 bg-[#FF7A00] rounded-3xl p-8 flex items-end justify-around text-black">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-4 rounded-2xl"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-4 rounded-2xl"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="bg-black text-white p-4 rounded-2xl"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
