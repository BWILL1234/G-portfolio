"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function BentoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF7] p-4 md:p-8 font-sans">

      {/* Navigation */}
      <nav className="relative flex justify-between items-center bg-white border border-[#EAEAEA] shadow-sm rounded-2xl px-6 md:px-8 py-6 mb-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#121212] hover:text-[#2563EB] transition-colors"
        >
          GODSWILL{" "}
          <span className="font-normal text-[#666666]">
            IKPEAMAH
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <Link
            href="/projects"
            className="text-[#121212] hover:text-[#2563EB] transition-colors"
          >
            PROJECTS
          </Link>

          <Link
            href="/about"
            className="text-[#121212] hover:text-[#2563EB] transition-colors"
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className="text-[#121212] hover:text-[#2563EB] transition-colors"
          >
            CONTACT
          </Link>

        </div>

        <button
          className="md:hidden text-[#121212]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#EAEAEA] rounded-2xl shadow-lg flex flex-col gap-6 px-6 py-6 md:hidden z-50">

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-[#121212] hover:text-[#2563EB]"
            >
              PROJECTS
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-[#121212] hover:text-[#2563EB]"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-[#121212] hover:text-[#2563EB]"
            >
              CONTACT
            </Link>

          </div>
        )}
      </nav>

      {/* Header */}

      <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-10 mb-8">

        <h1
          className="text-5xl md:text-6xl font-semibold text-[#121212] leading-tight"
          style={{
            fontFamily: "Protest Revolution",
          }}
        >
          Selected <br />

          <span className="italic font-light text-[#2563EB]">
            Projects
          </span>

        </h1>

        <p className="mt-4 text-[#666666] max-w-xl leading-7">
          A curated selection of products I've designed—focused on
          clarity, usability, and purposeful experiences.
        </p>

      </div>

      {/* Projects */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Jebota */}

        <Link
          href="/projects/jebota"
          className="group md:col-span-6"
        >

          <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">

              <Image
                src="/jebota-case.png"
                alt="Jebota"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-2xl font-semibold text-[#121212]">
                  Jebota
                </h3>

                <p className="text-[#666666] mt-1">
                  Lead Designer
                </p>

              </div>

              <ArrowUpRight className="text-[#2563EB] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

          </div>

        </Link>

        {/* MedxVerse */}

        <Link
          href="/projects/medxverse"
          className="group md:col-span-6"
        >

          <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">

              <Image
                src="/me.png"
                alt="MedxVerse"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-2xl font-semibold text-[#121212]">
                  MedxVerse
                </h3>

                <p className="text-[#666666] mt-1">
                  Lead Designer
                </p>

              </div>

              <ArrowUpRight className="text-[#2563EB] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

          </div>

        </Link>

        {/* Babanawa */}

        <Link
          href="/projects/babanawa"
          className="group md:col-span-6"
        >

          <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">

              <Image
                src="/cover.png"
                alt="University"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex justify-between items-end">

              <div>

                <h3 className="text-2xl font-semibold text-[#121212]">
                  Babanawa University
                </h3>

                <p className="text-[#666666] mt-1">
                  Lead Designer
                </p>

              </div>

              <ArrowUpRight className="text-[#2563EB] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

          </div>

        </Link>

        {/* Blivap */}

        <Link
          href="/projects/blivap"
          className="group md:col-span-6"
        >

          <div className="bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4">

              <Image
                src="/bv2.png"
                alt="Blivap"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex justify-between items-end">

              <div>

                <h3 className="text-2xl font-semibold text-[#121212]">
                  Blivap
                </h3>

                <p className="text-[#666666] mt-1">
                  Lead Designer
                </p>

              </div>

              <ArrowUpRight className="text-[#2563EB] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

            </div>

          </div>

        </Link>

      </div>

    </div>
  );
}