'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#2D2D3D] sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo + Domain Name */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
              <Image
                src="/logos/winningspins-logo.svg"
                alt="Casino Chip"
                fill
                className="object-contain group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-lg md:text-2xl">WinningSpins</span>
              <span className="text-[#FFD700] font-bold text-xs md:text-sm">.uk</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-semibold hover:bg-[#1A1A24] rounded-lg"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-semibold hover:bg-[#1A1A24] rounded-lg"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-semibold hover:bg-[#1A1A24] rounded-lg"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="px-4 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-semibold hover:bg-[#1A1A24] rounded-lg"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="px-4 py-2 text-white hover:text-[#FFD700] transition-all duration-300 font-semibold hover:bg-[#1A1A24] rounded-lg"
            >
              Terms
            </Link>
          </nav>

          {/* 18+ Badge and Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* 18+ Badge - Smaller on mobile */}
            <div className="flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC700] border-2 border-[#FFD700]/50 shadow-lg shadow-[#FFD700]/30">
              <span className="text-black font-black text-xs md:text-sm">18+</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-white hover:text-[#FFD700] hover:bg-[#1A1A24] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A1A24] border-t border-[#2D2D3D] rounded-b-xl">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#242433] rounded-lg transition-colors font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#242433] rounded-lg transition-colors font-semibold"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#242433] rounded-lg transition-colors font-semibold"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#242433] rounded-lg transition-colors font-semibold"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={closeMenu}
                className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-[#242433] rounded-lg transition-colors font-semibold"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
