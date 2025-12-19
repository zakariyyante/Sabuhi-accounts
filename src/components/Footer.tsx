import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-t border-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Branding */}
        <div className="py-12 border-b border-[#475569]">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/logos/10casinos-logo.svg"
                alt="10 Casinos"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-black text-3xl">10Casinos</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] font-bold text-lg">.uk</span>
            </div>
          </div>
          <p className="text-[#94A3B8] text-base max-w-3xl leading-relaxed">
            Your definitive comparison site for the UK's top 10 licensed casinos. We deliver unbiased reviews, verified welcome bonuses, and detailed analysis of UKGC-approved gaming platforms.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4] rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="/about" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="/contact" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#06B6D4] to-[#3B82F6] rounded-full"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-[#94A3B8] hover:text-[#06B6D4] text-sm transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="/terms" className="text-[#94A3B8] hover:text-[#06B6D4] text-sm transition-colors hover:translate-x-1 inline-block">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#F59E0B] to-[#FBBF24] rounded-full"></div>
              Responsible Gaming
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* BeGambleAware Logo */}
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all hover:scale-105 border border-[#475569] hover:border-[#3B82F6]"
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
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-all hover:scale-105 border border-[#475569] hover:border-[#3B82F6]"
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

            <div className="bg-[#1E293B]/50 border border-[#475569] rounded-xl p-4">
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                <span className="text-white font-bold block mb-2">⚠️ Play Responsibly</span>
                Gambling should remain entertainment. Need assistance? Contact GamCare or BeGambleAware right away. Players must be 18+.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#475569] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm">
              &copy; 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] font-bold">{siteConfig.name}</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white font-black text-xs">18+</span>
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
