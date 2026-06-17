"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function BentoPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const handleSubmit = () => {
  const body = `
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
  `;

  const mailtoLink = `mailto:godswill.ikpeamah@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.assign(mailtoLink);
};


  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      {/* Navigation Bar */}
      <nav className="relative flex justify-between items-center bg-white border border-[#EAEAEA] shadow-sm rounded-2xl px-6 md:px-8 py-6 mb-6">

  <Link
    href="/"
    className="text-xl font-bold tracking-tight text-[#121212] hover:text-[#2563EB] transition-colors"
  >
    GODSWILL{" "}
    <span className="font-normal text-[#666666]">
      IKPEAMAH
    </span>
  </Link>

  <div className="hidden md:flex gap-8 font-medium text-sm">

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
    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#EAEAEA] shadow-lg rounded-2xl flex flex-col gap-6 px-6 py-6 md:hidden z-50">

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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

  {/* LEFT PANEL */}
  <div className="lg:col-span-5 bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[500px] transition-all duration-300 hover:shadow-md">

    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#666666] mb-4">
        Contact
      </p>

      <h1
        className="text-5xl md:text-6xl font-semibold text-[#121212] leading-tight mb-6"
        style={{
          fontFamily: "Protest Revolution",
        }}
      >
        Let's <br />

        <span className="italic font-light text-[#2563EB]">
          Connect.
        </span>
      </h1>

      <p className="text-lg text-[#666666] leading-8 max-w-sm">
        Have a project in mind or simply want to say hello? I'm always open
        to discussing new ideas, collaborations, and opportunities.
      </p>
    </div>

    <div className="space-y-8 mt-12">

      <div className="flex items-center gap-4">
        <div className="bg-[#2563EB]/10 text-[#2563EB] p-4 rounded-2xl">
          <Mail size={22} />
        </div>

        <div>
          <p className="text-sm text-[#666666]">Email</p>
          <span className="text-[#121212] font-medium">
            godswill.ikpeamah@gmail.com
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[#2563EB]/10 text-[#2563EB] p-4 rounded-2xl">
          <MapPin size={22} />
        </div>

        <div>
          <p className="text-sm text-[#666666]">Location</p>
          <span className="text-[#121212] font-medium">
            Abuja, Nigeria
          </span>
        </div>
      </div>

    </div>

    <div className="flex gap-3 mt-10">

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#1D4ED8] transition-all duration-300 hover:-translate-y-1"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#1D4ED8] transition-all duration-300 hover:-translate-y-1"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="https://wa.me/2349026842961"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2563EB] text-white p-4 rounded-2xl hover:bg-[#25D366] transition-all duration-300 hover:-translate-y-1"
      >
        <MessageCircle size={20} />
      </a>

    </div>

  </div>

  {/* RIGHT PANEL */}
  <div className="lg:col-span-7 bg-white border border-[#EAEAEA] shadow-sm rounded-3xl p-8 md:p-12 transition-all duration-300 hover:shadow-md">

    <form onSubmit={handleSubmit} className="space-y-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label className="text-sm uppercase tracking-wider text-[#666666]">
            Your Name
          </label>

          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full mt-3 bg-transparent border-b border-[#EAEAEA] py-3 text-[#121212] outline-none focus:border-[#2563EB] transition-colors"
            required
          />
        </div>

        <div>
          <label className="text-sm uppercase tracking-wider text-[#666666]">
            Email Address
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full mt-3 bg-transparent border-b border-[#EAEAEA] py-3 text-[#121212] outline-none focus:border-[#2563EB] transition-colors"
            required
          />
        </div>

      </div>

      <div>

        <label className="text-sm uppercase tracking-wider text-[#666666]">
          Subject
        </label>

        <input
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full mt-3 bg-transparent border-b border-[#EAEAEA] py-3 text-[#121212] outline-none focus:border-[#2563EB] transition-colors"
          required
        />

      </div>

      <div>

        <label className="text-sm uppercase tracking-wider text-[#666666]">
          Message
        </label>

        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full mt-3 bg-transparent border-b border-[#EAEAEA] py-3 text-[#121212] outline-none resize-none focus:border-[#2563EB] transition-colors"
          required
        />

      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-[#2563EB] text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-1"
      >
        SEND MESSAGE

        <ArrowUpRight size={20} />
      </button>

    </form>

  </div>

</div>
      </div>
  );
}
