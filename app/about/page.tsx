"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
} from "lucide-react";

export default function BentoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF7] p-4 md:p-8 font-sans">

  {/* Navigation Bar */}
  <nav className="relative flex justify-between items-center bg-white border border-[#EAEAEA] shadow-sm rounded-2xl px-6 md:px-8 py-6 mb-6">

    {/* Logo */}
    <Link
      href="/"
      className="text-xl font-bold tracking-tight text-[#121212] transition-colors hover:text-[#2563EB]"
    >
      GODSWILL{" "}
      <span className="font-normal text-[#666666]">
        IKPEAMAH
      </span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-10 font-medium text-sm">

      <Link
        href="/projects"
        className="text-[#121212] transition-colors hover:text-[#2563EB]"
      >
        PROJECTS
      </Link>

      <Link
        href="/about"
        className="text-[#121212] transition-colors hover:text-[#2563EB]"
      >
        ABOUT
      </Link>

      <Link
        href="/contact"
        className="text-[#121212] transition-colors hover:text-[#2563EB]"
      >
        CONTACT
      </Link>

    </div>

    {/* Mobile Burger Button */}
    <button
      className="md:hidden text-[#121212] transition-colors hover:text-[#2563EB]"
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
          className="font-medium text-[#121212] transition-colors hover:text-[#2563EB]"
        >
          PROJECTS
        </Link>

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-[#121212] transition-colors hover:text-[#2563EB]"
        >
          ABOUT
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="font-medium text-[#121212] transition-colors hover:text-[#2563EB]"
        >
          CONTACT
        </Link>

      </div>
    )}
  </nav>

      {/* Hero */}
<section className="grid md:grid-cols-2 gap-12 items-center mb-24">

  {/* About Card */}
  <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 transition-all duration-300 hover:shadow-md">

    <p className="text-xs tracking-[0.2em] uppercase text-[#666666] mb-4">
      About Me
    </p>

    <h1
      className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-[#121212]"
      style={{
        fontFamily: "Protest Revolution",
      }}
    >
      I Create <br />

      <span className="italic font-light text-[#2563EB]">
        Digital
      </span>

      <br />

      Future.
    </h1>

    <p className="text-lg leading-8 max-w-xl text-[#666666]">
      I'm a UI/UX Designer dedicated to creating intuitive,
      user-centered digital experiences. I craft scalable design systems
      that align business objectives with real user needs, ensuring every
      interaction feels seamless and meaningful.
    </p>

  </div>

  {/* Profile Image */}
  <div className="relative h-[420px] rounded-3xl overflow-hidden border border-[#EAEAEA] shadow-sm group">

    <Image
      src="/me.jpeg"
      alt="Godswill"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />

  </div>

</section>

{/* Experience & Education */}
<section className="grid md:grid-cols-2 gap-8 mb-24">

  {/* Experience */}
  <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 transition-all duration-300 hover:shadow-md">

    <h2 className="text-2xl font-semibold text-[#121212] mb-8">
      Experience
    </h2>

    <ul className="space-y-6 text-sm">

      <li className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
        <span className="text-[#121212]">
          Senior UI/UX Designer — Adioo
        </span>

        <span className="text-[#666666]">
          2024 – Present
        </span>
      </li>

      <li className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
        <span className="text-[#121212]">
          Senior UI/UX Designer — Blivap
        </span>

        <span className="text-[#666666]">
          Freelance
        </span>
      </li>

      <li className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
        <span className="text-[#121212]">
          Senior UI/UX Designer — MedxVerse
        </span>

        <span className="text-[#666666]">
          Freelance
        </span>
      </li>

    </ul>

  </div>

  {/* Education */}
  <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 transition-all duration-300 hover:shadow-md">

    <h2 className="text-2xl font-semibold text-[#121212] mb-8">
      Education
    </h2>

    <ul className="space-y-6 text-sm">

      <li className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
        <span className="text-[#121212]">
          Salem University — Criminology & Security Studies
        </span>

        <span className="text-[#666666]">
          2020 – 2024
        </span>
      </li>

    </ul>

  </div>

</section>

{/* Skills */}
<section className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 mb-24 transition-all duration-300 hover:shadow-md">

  <h2 className="text-2xl font-semibold text-[#121212] mb-10">
    Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {[
      { name: "UI/UX Design", level: "95%" },
      { name: "Branding", level: "60%" },
      { name: "Product Design", level: "80%" },
      { name: "Design Systems", level: "85%" },
      { name: "Digital Marketing", level: "60%" },
    ].map((skill) => (
      <div key={skill.name}>

        <div className="flex justify-between text-sm mb-3">

          <span className="text-[#121212] font-medium">
            {skill.name}
          </span>

          <span className="text-[#666666]">
            {skill.level}
          </span>

        </div>

        <div className="w-full h-2 bg-[#EAEAEA] rounded-full overflow-hidden">

          <div
            className="h-2 bg-[#2563EB] rounded-full transition-all duration-700"
            style={{ width: skill.level }}
          />

        </div>

      </div>
    ))}

  </div>

</section>

{/* Footer CTA */}
<footer className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 hover:shadow-md">

  <div>

    <h3 className="text-2xl font-semibold text-[#121212] mb-2">
      Let's build something great.
    </h3>

    <p className="text-[#666666]">
      Need help with a product or idea? Let's work together.
    </p>

  </div>

  <Link
    href="/contact"
    className="px-8 py-4 rounded-full bg-[#2563EB] text-white font-medium transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-lg"
  >
    Get in Touch →
  </Link>

</footer>
    </div>
  );
}
