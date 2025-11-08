import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] border-t border-[#0D9488]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Branding */}
        <div className="py-8 border-b border-[#0D9488]/30">
          <div className="flex items-center mb-4">
            {/* Website Logo */}
            <div className="relative w-64 h-14">
              <Image
                src="/logos/top15bestcasinosuk-logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            Your definitive guide to the top 15 UK Gambling Commission licensed online casinos. We offer unbiased evaluations and detailed comparisons of premium UK-regulated platforms, helping British players locate trustworthy gaming sites.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pages */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-[#14B8A6] text-sm transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#14B8A6] text-sm transition-colors">About</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-[#14B8A6] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-[#14B8A6] text-sm transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Responsible Gaming</h3>
            
            {/* BeGambleAware Logo */}
            <div className="mb-4">
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity inline-block"
              >
                <div className="relative w-48 h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Aware.png"
                    alt="BeGambleAware - Gambling Support"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* GamCare Logo */}
            <div className="mb-4">
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity inline-block"
              >
                <div className="relative w-48 h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Care-Logo-png.webp"
                    alt="GamCare - Gambling Support Starts Here"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-gray-300 text-xs leading-relaxed">
              Gamble responsibly at all times. Gaming addiction is real. If you need help, please contact GamCare or BeGambleAware immediately.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#0D9488]/30 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-1">Gambling is addictive. Always play responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
