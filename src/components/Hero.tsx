import { siteConfig } from '@/config/site';

export default function Hero() {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long',
    year: 'numeric'
  });

  return (
    <section id="home" className="relative py-3 md:py-12 bg-[#0A0A0F] overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FFD700]/10 to-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated badge - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A24] border border-[#2D2D3D] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-[#A1A1AA]">VERIFIED</span>
              <span className="text-xs text-white font-semibold">{currentDate}</span>
            </div>
          </div>
        </div>

        {/* Hero headline */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 leading-tight">
            <span className="block text-white">
              {siteConfig.hero.headline}
            </span>
          </h1>
          
          <p className="hidden md:block text-sm md:text-base text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-6">
            {siteConfig.hero.subtext}
          </p>

        </div>
      </div>
    </section>
  );
}
