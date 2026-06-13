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

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="bg-[#FF7A00] rounded-3xl p-10">
          <p className="text-xs tracking-widest mb-4 opacity-70">
            ABOUT ME
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            I Create <br /> Digital <br /> Future.
          </h1>
          <p className="text-lg leading-relaxed max-w-xl">
            I’m a UI/UX Designer dedicated to creating intuitive,
            user-centered digital experiences. I craft scalable design systems
            that align business objectives with real user needs, ensuring every interaction
            feels seamless and meaningful
          </p>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/me.jpeg"
            alt="Godswill"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Experience & Education */}
      <section className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="bg-[#FF7A00] rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>
          <ul className="space-y-6 text-sm">
            <li className="flex justify-between border-b border-black/20 pb-3">
              <span>Senior UIUX Designer — Adioo</span>
              <span>2024 – Present</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#FF7A00] rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-8">Education</h2>
          <ul className="space-y-6 text-sm">
            <li className="flex justify-between border-b border-black/20 pb-3">
              <span>Salem University — Criminology and Security Studies </span>
              <span>2020 – 2024</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#FF7A00] rounded-3xl p-10 mb-24">
        <h2 className="text-2xl font-semibold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            { name: "UIUX Design", level: "95%" },
            { name: "Branding", level: "60%" },
            { name: "Product Design", level: "80%" },
            { name: "Design Systems", level: "85%" },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full h-1 bg-black/20 rounded">
                <div
                  className="h-1 bg-black rounded"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#262626] text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm opacity-80">
          Need help with a project? Let’s work together.
        </p>
        <Link
          href="/contact"
          className="font-medium border-b border-white hover:opacity-70"
        >
          Get in touch →
        </Link>
      </footer>
    </div>
  );
}
