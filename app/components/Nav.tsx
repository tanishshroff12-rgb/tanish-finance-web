"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-stone/30">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-ink">
          Tanish Finance
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/hello" 
            className="text-ink hover:text-accent transition-colors"
          >
            Hello
          </Link>
          <Link 
            href="/stocks" 
            className="text-ink hover:text-accent transition-colors"
          >
            Stocks
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-4 h-0.5 bg-ink transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-stone/30">
          <div className="px-4 py-2 space-y-2">
            <Link 
              href="/hello" 
              className="block py-2 text-ink hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hello
            </Link>
            <Link 
              href="/stocks" 
              className="block py-2 text-ink hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stocks
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
