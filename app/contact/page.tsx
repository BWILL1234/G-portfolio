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
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT PANEL */}
        <div className="lg:col-span-5 bg-[#FF7A00] rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[500px]">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter mb-6"
            style={{
                    fontFamily: "Protest Revolution",
                  }}
            >
              Lets <br /> Connect.
            </h1>
            <p className="text-xl font-medium max-w-xs leading-relaxed">
              Have a project in mind or just want to say hi? Im always open to
              discussing new opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-black/10 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <span className="text-lg font-semibold">
                godswill.ikpeamah@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-black/10 p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <span className="text-lg font-semibold">Abuja, Nigeria</span>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
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

        {/* RIGHT PANEL */}
        <div className="lg:col-span-7 bg-[#262626] rounded-3xl p-8 md:p-12 text-white">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-sm opacity-60 uppercase">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-transparent border-b border-white/20 pb-2 outline-none w-full"
                  required
                />
              </div>

              <div>
                <label className="text-sm opacity-60 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-transparent border-b border-white/20 pb-2 outline-none w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm opacity-60 uppercase">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="bg-transparent border-b border-white/20 pb-2 outline-none w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm opacity-60 uppercase">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-transparent border-b border-white/20 pb-2 outline-none resize-none w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-4 bg-[#FF7A00] text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              SEND MESSAGE
              <ArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
