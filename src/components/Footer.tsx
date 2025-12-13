import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#2D2D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Branding */}
        <div className="py-12 border-b border-[#2D2D3D]">
          <div className="flex items-center mb-6">
            <div className="relative w-64 h-14">
              <Image
                src="/logos/top15bestcasinosuk-logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[#A1A1AA] text-base max-w-3xl leading-relaxed">
            Your trusted guide to the UK's premier online casinos. We provide expert reviews, exclusive bonuses, and comprehensive comparisons of UKGC-licensed platforms to help you find the perfect gaming destination.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FFD700] to-[#FFC700] rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#A1A1AA] hover:text-[#FFD700] text-sm transition-colors hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="/about" className="text-[#A1A1AA] hover:text-[#FFD700] text-sm transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="/contact" className="text-[#A1A1AA] hover:text-[#FFD700] text-sm transition-colors hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#8B5CF6] to-[#7C3AED] rounded-full"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-[#A1A1AA] hover:text-[#8B5CF6] text-sm transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="/terms" className="text-[#A1A1AA] hover:text-[#8B5CF6] text-sm transition-colors hover:translate-x-1 inline-block">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#10B981] to-[#059669] rounded-full"></div>
              Responsible Gaming
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* BeGambleAware Logo */}
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all hover:scale-105 border border-[#2D2D3D] hover:border-[#10B981]"
              >
                <div className="relative w-full h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Aware.png"
                    alt="BeGambleAware"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* GamCare Logo */}
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all hover:scale-105 border border-[#2D2D3D] hover:border-[#10B981]"
              >
                <div className="relative w-full h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Care-Logo-png.webp"
                    alt="GamCare"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            <div className="bg-[#1A1A24]/50 border border-[#2D2D3D] rounded-xl p-4">
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                <span className="text-white font-bold block mb-2">⚠️ Play Responsibly</span>
                Gaming should be entertainment. If you need support, contact GamCare or BeGambleAware immediately. Must be 18+.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#2D2D3D] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#A1A1AA] text-sm">
              &copy; 2025 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC700] flex items-center justify-center">
                  <span className="text-black font-black text-xs">18+</span>
                </div>
                <span>Gamble Responsibly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
