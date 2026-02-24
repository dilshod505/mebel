"use client";

import { useState } from "react";

const navItems = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-24 sticky top-0 z-50 w-full border-b border-white/10 bg-white/50 dark:bg-dark-100/50 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          <span className="font-display text-3xl text-amber-600">Sof</span>{" "}
          Mebel
        </h3>

        {/* Desktop Menu */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition duration-300 hover:text-amber-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-gray-900 md:hidden"
          aria-label="Menyu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-5 mb-4 rounded-2xl bg-white/80 p-4 text-gray-900 shadow-lg dark:bg-dark-100/80">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-3 py-2 text-base font-medium transition duration-300 hover:bg-amber-100 hover:text-amber-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
