'use client';

import { siteConfig, getFilteredCasinos, getUrlParameter, isGoogleReferrer } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTrackingValue } from '@/utils/tracking';
import { track } from '@vercel/analytics';

export default function CasinoBrands() {
  const [trackingValue, setTrackingValue] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [filteredCasinos, setFilteredCasinos] = useState<typeof siteConfig.casinos>([]);

  useEffect(() => {
    const value = getTrackingValue();
    setTrackingValue(value);
  }, []);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    setIsMounted(true);
    
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const isMobile = !isDesktop;
    const hasGclid = getUrlParameter('gclid') !== null;
    const isFromGoogle = isGoogleReferrer();
    
    if (isMobile && hasGclid && isFromGoogle) {
      const mobileOnlyCasinos = getFilteredCasinos();
      
      const casinosWithRankings = mobileOnlyCasinos.map((casino, index) => ({
        ...casino,
        rating: 10 - (index * 0.1)
      }));
      
      setFilteredCasinos(casinosWithRankings);
    } else if (isDesktop) {
      const casinos = siteConfig.casinos.slice(-1);
      setFilteredCasinos(casinos);
    } else {
      const casinos = siteConfig.casinos.slice(-1);
      setFilteredCasinos(casinos);
    }
  }, [isDesktop, isMounted]);

  const processPlayLink = (link: string) => {
    if (!trackingValue) return link;
    
    let processedLink = link;
    const trackingParamNames = ['gclid', 'payload', 'clickid', 'afp', 'gcslid', 'visit_id', 'trackid', 'ref', 'subid'];
    
    for (const paramName of trackingParamNames) {
      const emptyParamPattern = new RegExp(`([&?])${paramName}=(?=&|$)`);
      if (emptyParamPattern.test(processedLink)) {
        if (processedLink.endsWith(`${paramName}=`)) {
          processedLink = processedLink + encodeURIComponent(trackingValue);
        } else {
          processedLink = processedLink.replace(emptyParamPattern, `$1${paramName}=${encodeURIComponent(trackingValue)}`);
        }
        return processedLink;
      }
    }
    
    const hasTrackingParam = trackingParamNames.some(param => processedLink.includes(`${param}=`));
    if (!hasTrackingParam) {
      const separator = processedLink.includes('?') ? '&' : '?';
      processedLink = `${processedLink}${separator}clickid=${encodeURIComponent(trackingValue)}`;
    }
    
    return processedLink;
  };

  if (!isMounted || filteredCasinos.length === 0) {
    return null;
  }

  return (
    <section id="casinos" className="py-16 md:py-20 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Top Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC700]">UK Casinos</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Hand-picked casinos with the best bonuses, fastest payouts, and highest security standards.
          </p>
        </div>

        {/* Casino Cards */}
        <div className="space-y-6">
          {filteredCasinos.map((casino, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-[#1A1A24] to-[#242433] rounded-3xl border border-[#2D2D3D] hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#FFD700]/20"
            >
              {/* #1 Badge */}
              {index === 0 && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-black font-black text-sm px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border-4 border-[#0A0A0F]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>TOP PICK</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                {/* Left: Position & Rating */}
                <div className="flex flex-col items-center justify-center min-w-[120px]">
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-[#FFC700] mb-2">
                    #{index + 1}
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= Math.round(casino.rating) ? 'text-[#FFD700]' : 'text-[#2D2D3D]'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-white">{casino.rating.toFixed(1)}</div>
                </div>

                {/* Center: Logo */}
                <div className="flex items-center justify-center min-w-[200px] md:min-w-[250px]">
                  <div className="relative h-24 w-48 md:h-32 md:w-64 bg-white/5 rounded-2xl p-4 flex items-center justify-center backdrop-blur-sm border border-[#2D2D3D]">
                    <Image
                      src={`/casino-logos/${casino.logo}`}
                      alt={casino.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Right: Bonus & CTA */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <div className="text-sm text-[#FFD700] font-bold mb-2">WELCOME BONUS</div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">
                      {casino.bonus.split('\n')[0]}
                    </div>
                    {casino.bonus.includes('\n') && (
                      <div className="text-xl md:text-2xl font-bold text-[#8B5CF6]">
                        {casino.bonus.split('\n')[1]}
                      </div>
                    )}
                  </div>
                  
                  <a
                    href={processPlayLink(casino.playLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      track('casino_click', {
                        casino_name: casino.name,
                        casino_rating: casino.rating.toString(),
                        position: (index + 1).toString(),
                        button_type: 'claim_bonus'
                      });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-black font-black text-lg rounded-xl hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <span>CLAIM BONUS</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>

                  <div className="mt-4 text-xs text-[#A1A1AA]">
                    18+ | T&Cs Apply | BeGambleAware.org
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
