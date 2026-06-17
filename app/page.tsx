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
    <div className="min-h-screen bg-[#FAFAF7] p-4 md:p-8 font-sans">
  {/* Navigation Bar */}
  <nav className="relative flex justify-between items-center bg-white border border-[#EAEAEA] shadow-sm rounded-2xl px-6 md:px-8 py-6 mb-4">
    {/* Logo */}
    <Link
      href="/"
      className="text-xl font-bold tracking-tight text-[#121212] hover:text-[#2563EB] transition-colors"
    >
      GODSWILL{" "}
      <span className="font-normal text-[#666666]">IKPEAMAH</span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 font-medium text-[#121212] text-sm">
      <Link
        href="/projects"
        className="hover:text-[#2563EB] transition-colors"
      >
        PROJECTS
      </Link>

      <Link
        href="/about"
        className="hover:text-[#2563EB] transition-colors"
      >
        ABOUT
      </Link>

      <Link
        href="/contact"
        className="hover:text-[#2563EB] transition-colors"
      >
        CONTACT
      </Link>
    </div>

    {/* Mobile Burger Button */}
    <button
      className="md:hidden text-[#121212]"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#EAEAEA] shadow-lg rounded-2xl flex flex-col gap-6 px-6 py-6 md:hidden z-50">
        <Link
          href="/projects"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-[#121212] hover:text-[#2563EB] transition-colors"
        >
          PROJECTS
        </Link>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-[#121212] hover:text-[#2563EB] transition-colors"
        >
          ABOUT
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-[#121212] hover:text-[#2563EB] transition-colors"
        >
          CONTACT
        </Link>
      </div>
    )}
  </nav>
     {/* Main Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]">

  {/* Headline Card */}
  <div className="md:col-span-5 bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden min-h-[400px] transition-all duration-300 hover:shadow-md">

    {/* Decorative Circle */}
    <div className="absolute top-8 right-8 opacity-20">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#2563EB"
          fill="none"
          strokeDasharray="2 2"
        />
      </svg>
    </div>

    <h2
      className="text-5xl md:text-6xl font-semibold text-[#121212] leading-tight"
      style={{
        fontFamily: "Protest Revolution",
      }}
    >
      Shaping Intuitive <br />
      Experiences <br />
      through <br />
      <span className="font-light italic text-[4rem] text-[#2563EB]">
        Purposeful UI/UX.
      </span>
    </h2>
  </div>

  {/* Profile Image */}
  <div className="md:col-span-3 relative min-h-[400px] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-sm group">
    <Image
      src="/me.jpeg"
      alt="Godswill"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

        {/* Values Card */}
<div className="md:col-span-4 bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-6 flex flex-col transition-all duration-300 hover:shadow-md">

  {/* Header */}
  <div className="flex justify-between items-start mb-4">
    <span className="font-bold text-[#121212] text-xl">
      Skills
    </span>
  </div>

  {/* Skills Image */}
  <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-[#EAEAEA]">
    <Image
      src="/skill10.png"
      alt="Skills"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Certificates Section */}
  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-[#121212]">
      📜 My Certificates
    </h3>

    <p className="text-sm text-[#666666]">
      Click any certificate below to view it.
    </p>

    {/* Certificate 1 */}
    <a
      href="https://static.semrush.com/academy/certificates/08837657e5/godswill-ikpeamah_2.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-[#EAEAEA] pb-3 text-lg font-semibold text-[#121212] transition-all duration-300 hover:text-[#2563EB]"
    >
      <span>Semrush Digital Marketing Certificate</span>
      <span className="group-hover:translate-x-1 transition-transform">
        ↗
      </span>
    </a>

    {/* Certificate 2 */}
    <a
      href="/certificates/uiux-design.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-[#EAEAEA] pb-3 text-lg font-semibold text-[#121212] transition-all duration-300 hover:text-[#2563EB]"
    >
      <span>UI/UX Design Certificate</span>
      <span className="group-hover:translate-x-1 transition-transform">
        ↗
      </span>
    </a>

    {/* Certificate 3 */}
    <a
      href="/certificates/product-design.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-[#EAEAEA] pb-3 text-lg font-semibold text-[#121212] transition-all duration-300 hover:text-[#2563EB]"
    >
      <span>Product Design Certificate</span>
      <span className="group-hover:translate-x-1 transition-transform">
        ↗
      </span>
    </a>
  </div>
</div>

      
{/* Featured Projects Section */}
<div className="md:col-span-12">
  <div className="mb-8">
    <h2 className="text-4xl font-bold text-[#121212]">
      Featured Projects
    </h2>
    <p className="text-[#666666] mt-2">
      A selection of products I've designed and shipped.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* MedxVerse */}
    <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg">

      <div className="relative h-56 overflow-hidden">
        <Image
          src="/me.png"
          alt="MedxVerse"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">

        <span className="text-sm uppercase tracking-wide text-[#666666]">
          Healthcare Ecosystem
        </span>

        <h3 className="text-3xl font-bold text-[#121212] mt-2">
          MedxVerse
        </h3>

        <p className="text-[#666666] mt-4 flex-1 leading-7">
          A digital healthcare platform connecting patients with hospitals,
          pharmacies, laboratories and healthcare professionals through one
          seamless experience.
        </p>

        <div className="flex gap-3 mt-6">

          <Link
            href="/projects/medxverse"
            className="flex-1 bg-[#2563EB] text-white text-center py-3 rounded-full font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            Case Study
          </Link>

          <a
            href="https://medxverseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-[#2563EB] text-[#2563EB] text-center py-3 rounded-full font-medium hover:bg-[#2563EB] hover:text-white transition-colors"
          >
            Live Site ↗
          </a>

        </div>

      </div>
    </div>

    {/* Jebota */}
    <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg">

      <div className="relative h-56 overflow-hidden">
        <Image
          src="/jebota-case.png"
          alt="Jebota"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">

        <span className="text-sm uppercase tracking-wide text-[#666666]">
          Digital Marketplace
        </span>

        <h3 className="text-3xl font-bold text-[#121212] mt-2">
          Jebota
        </h3>

        <p className="text-[#666666] mt-4 flex-1 leading-7">
          Jebota is a marketplace shopping and delivery platform that
          connects customers with local markets through personal shoppers.
          Users can browse markets, select products, communicate directly
          with assigned shoppers, and receive their purchases at their
          doorstep.
        </p>

        <div className="flex gap-3 mt-6">

          <Link
            href="/projects/jebota"
            className="flex-1 bg-[#2563EB] text-white text-center py-3 rounded-full font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            Case Study
          </Link>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-[#2563EB] text-[#2563EB] text-center py-3 rounded-full font-medium hover:bg-[#2563EB] hover:text-white transition-colors"
          >
            Live Site ↗
          </a>

        </div>

      </div>
    </div>

    {/* Blivap */}
    <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg">

      <div className="relative h-56 overflow-hidden">
        <Image
          src="/bv2.png"
          alt="Blivap"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">

        <span className="text-sm uppercase tracking-wide text-[#666666]">
          Health & Donation Platform
        </span>

        <h3 className="text-3xl font-bold text-[#121212] mt-2">
          Blivap
        </h3>

        <p className="text-[#666666] mt-4 flex-1 leading-7">
          A secure blood and sperm donation platform that connects verified
          donors with recipients while simplifying donations and improving
          access to life-saving and fertility resources.
        </p>

        <div className="flex gap-3 mt-6">

          <Link
            href="/projects/blivap"
            className="flex-1 bg-[#2563EB] text-white text-center py-3 rounded-full font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            Case Study
          </Link>

          <a
            href="https://blivap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-[#2563EB] text-[#2563EB] text-center py-3 rounded-full font-medium hover:bg-[#2563EB] hover:text-white transition-colors"
          >
            Live Site ↗
          </a>

        </div>

      </div>
    </div>

  </div>
</div>

{/* Socials */}
<div className="md:col-span-4 bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-8 flex items-end justify-around">

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#1D4ED8] transition-colors duration-300"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#1D4ED8] transition-colors duration-300"
  >
    <Linkedin size={20} />
  </a>

  <a
    href="https://wa.me/2349026842961"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#25D366] transition-colors duration-300"
  >
    <MessageCircle size={20} />
  </a>

</div>
      </div>
    </div>
  );
}
