"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-200 shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <h1 className="relative text-xl md:text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                  Sof
                </span>
                <span className="text-gray-900 dark:text-white"> Mebel</span>
              </h1>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-black transition-all duration-300 hover:text-amber-600 dark:hover:text-amber-400 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-amber-600/10 hover:bg-amber-600/20 text-amber-600 dark:text-amber-400 transition-all duration-300 group"
            aria-label="Menyu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden border-t border-amber-100/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col divide-y divide-amber-100/20 px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600/0 group-hover:bg-amber-600 transition-all duration-300" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
