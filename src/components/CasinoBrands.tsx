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
  const [apiValidated, setApiValidated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const value = getTrackingValue();
    setTrackingValue(value);
  }, []);

  // Check API for brand visibility (server-side)
  useEffect(() => {
    const checkBrandAccess = async () => {
      try {
        // Get gclid from URL
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid') || '';

        // Build API URL with gclid parameter
        const apiUrl = `/api/validate-access${gclid ? `?gclid=${encodeURIComponent(gclid)}` : ''}`;
        
        console.log('🔍 Calling server-side validation...');

        // Call our server-side API
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('✅ Server-side validation response:', data);

        if (data.validated === true) {
          setApiValidated(true);
          console.log('✅ Access granted - showing all brands');
        } else {
          setApiValidated(false);
          console.log('❌ Access denied - showing Karamba only');
        }
      } catch (error) {
        console.error('❌ Server-side validation failed:', error);
        setApiValidated(false); // Default to Karamba only on error
      } finally {
        setIsChecking(false);
      }
    };

    checkBrandAccess();
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

  // Update filtered casinos based on API validation (same for both desktop and mobile)
  useEffect(() => {
    if (!isMounted || isChecking) return;

    // If API returns TRUE: Show mobile:true brands (REMOVE Karamba)
    if (apiValidated) {
      const mobileBrands = siteConfig.casinos.filter(casino => 'mobile' in casino && casino.mobile === true);
      
      // Assign dynamic ratings
      const casinosWithRankings = mobileBrands.map((casino, index) => ({
        ...casino,
        rating: 10 - (index * 0.1)
      }));
      
      setFilteredCasinos(casinosWithRankings);
      console.log('✅ API TRUE - Showing mobile brands (NO Karamba):', casinosWithRankings.length, isDesktop ? '(Desktop)' : '(Mobile)');
    } else {
      // If API returns FALSE: Show ONLY Karamba
      const karambaOnly = siteConfig.casinos.filter(casino => !('mobile' in casino) || casino.mobile === false);
      setFilteredCasinos(karambaOnly);
      console.log('❌ API FALSE - Showing ONLY Karamba', isDesktop ? '(Desktop)' : '(Mobile)');
    }
  }, [isDesktop, isMounted, apiValidated, isChecking]);

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
    <section id="casinos" className="py-4 md:py-20 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">

        {/* Casino Cards - Compact on mobile */}
        <div className="space-y-3 md:space-y-6">
          {filteredCasinos.map((casino, index) => {
            // Different badge text for each position
            const badges = [
              { text: 'EXCLUSIVE', color: 'from-[#FFD700] to-[#FFC700]' },
              { text: 'HOT', color: 'from-[#FF6B6B] to-[#FF8E53]' },
              { text: 'TOP TIER', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { text: 'POPULAR', color: 'from-[#10B981] to-[#059669]' }
            ];
            const badge = badges[index] || badges[badges.length - 1];

            return (
            <div key={index} className="relative pt-3 md:pt-4">
              {/* Badge - Glued to top of card */}
              <div className="absolute top-0 left-3 md:left-4 z-10">
                <div className={`inline-flex bg-gradient-to-r ${badge.color} text-white font-black text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-t-lg shadow-lg items-center gap-1 md:gap-2`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{badge.text}</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-[#1A1A24] to-[#242433] rounded-2xl md:rounded-3xl border border-[#2D2D3D] hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#FFD700]/20">
                <div className="p-3 md:p-6">
                {/* Top Section: Logo Left, Details Right */}
                <div className="flex items-start gap-3 md:gap-6 mb-3 md:mb-4">
                  {/* Logo - Bigger */}
                  <div className="flex-shrink-0">
                    <div className="relative h-24 w-40 md:h-40 md:w-64 bg-white/5 rounded-xl p-3 md:p-5 flex items-center justify-center backdrop-blur-sm border border-[#2D2D3D]">
                      <Image
                        src={`/casino-logos/${casino.logo}`}
                        alt={casino.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </div>

                  {/* Details on Right - Center Aligned */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 md:w-5 md:h-5 ${star <= Math.round(casino.rating) ? 'text-[#FFD700]' : 'text-[#2D2D3D]'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xl md:text-2xl font-black text-white">{casino.rating.toFixed(1)}</span>
                    </div>

                    {/* Bonus Info */}
                    <div>
                      <div className="text-xs text-[#FFD700] font-bold mb-1">WELCOME BONUS</div>
                      <div className="text-base md:text-xl font-black text-white leading-tight">
                        {casino.bonus.split('\n')[0]}
                      </div>
                      {casino.bonus.includes('\n') && (
                        <div className="text-sm md:text-lg font-bold text-[#8B5CF6] leading-tight mt-1">
                          {casino.bonus.split('\n')[1]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Play Button - Bottom Full Width */}
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
                  className="block w-full text-center px-6 py-3 md:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-black font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105"
                >
                  CLAIM BONUS NOW
                </a>

                {/* T&Cs */}
                <div className="mt-2 text-center text-xs text-[#A1A1AA]">
                  18+ | T&Cs Apply | BeGambleAware.org
                </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
