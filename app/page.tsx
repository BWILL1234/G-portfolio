"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  MessageCircle,
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
  href="/"
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
                    fontFamily: "Protest Revolution",
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
    <span className="font-bold text-black text-xl">Skills!</span>
  </div>

  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
    <Image src="/skill6.png" alt="Profile" fill className="object-cover" />
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

      
{/* Featured Projects Section */}
<div className="md:col-span-12">
  <div className="mb-6">
    <h2 className="text-4xl font-bold text-black">Featured Projects</h2>
    <p className="text-black/60 mt-2">
      A selection of products I've designed and shipped.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* MedxVerse */}
    <div className="bg-[#FF7A00] rounded-3xl overflow-hidden flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/me.png"
          alt="MedxVerse"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-sm uppercase opacity-70">
          Healthcare Ecosystem
        </span>

        <h3 className="text-3xl font-bold mt-2">
          MedxVerse
        </h3>

        <p className="text-black/70 mt-4 flex-1">
          A digital healthcare platform connecting patients with hospitals,
          pharmacies, laboratories and healthcare professionals through one
          seamless experience.
        </p>

        <div className="flex gap-3 mt-6">
          <Link
            href="/projects/medxverse"
            className="flex-1 bg-black text-white text-center py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Case Study
          </Link>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-black text-black text-center py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Live Site ↗
          </a>
        </div>
      </div>
    </div>

    {/* Jebota */}
    <div className="bg-[#262626] text-white rounded-3xl overflow-hidden flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/jebota-case.png"
          alt="Jebota"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-sm uppercase opacity-70">
          
        </span>

        <h3 className="text-3xl font-bold mt-2">
          Jebota
        </h3>
        Digital Market 
        <p className="text-white/70 mt-4 flex-1">
          Jebota is a marketplace shopping and delivery platform that 
          connects customers with local markets through personal shoppers. 
          Users can browse markets, select products, communicate directly with 
          assigned shoppers, and receive their purchases at their doorstep.
        </p>

        <div className="flex gap-3 mt-6">
          <Link
            href="/projects/jebota"
            className="flex-1 bg-white text-black text-center py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Case Study
          </Link>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-white text-white text-center py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Live Site ↗
          </a>
        </div>
      </div>
    </div>

    {/* Blivap */}
    <div className="bg-[#FF7A00] rounded-3xl overflow-hidden flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/bv2.png"
          alt="Blivap"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-sm uppercase opacity-70">
          Health & Donation Platform
        </span>

        <h3 className="text-3xl font-bold mt-2">
          Blivap
        </h3>

        <p className="text-black/70 mt-4 flex-1">
          A secure blood and sperm donation platform that connects verified
          donors with recipients while simplifying donations and improving
          access to life-saving and fertility resources.
        </p>

        <div className="flex gap-3 mt-6">
          <Link
            href="/projects/blivap"
            className="flex-1 bg-black text-white text-center py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Case Study
          </Link>

          <a
            href="https://blivap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-black text-black text-center py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Live Site ↗
          </a>
        </div>
      </div>
    </div>

  </div>
</div>


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
  href="https://wa.me/2349026842961"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white p-4 rounded-2xl hover:bg-[#25D366] transition-colors duration-300"
>
  <MessageCircle size={20} />
</a>
          
        </div>
      </div>
    </div>
  );
}
