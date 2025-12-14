import { siteConfig } from '@/config/site';

export default function Hero() {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long',
    year: 'numeric'
  });

  return (
    <section id="home" className="relative py-6 md:py-24 bg-[#0A0A0F] overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FFD700]/10 to-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#10B981]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A24] border border-[#2D2D3D] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-[#A1A1AA]">VERIFIED</span>
              <span className="text-xs text-white font-semibold">{currentDate}</span>
            </div>
          </div>
        </div>

        {/* Hero headline */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-3 md:mb-4 leading-tight">
            <span className="block text-white mb-1 md:mb-2">
              {siteConfig.hero.headline}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC700] to-[#FFD700]">
              {siteConfig.hero.subheadline}
            </span>
          </h1>
          
          <p className="hidden md:block text-lg md:text-xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed mb-10">
            {siteConfig.hero.subtext}
          </p>

          {/* CTA Buttons - Hidden on mobile */}
          <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#casinos" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105"
            >
              <span>View Top Casinos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#why-choose-us" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A24] border-2 border-[#2D2D3D] text-white font-bold rounded-xl hover:border-[#8B5CF6] transition-all duration-300"
            >
              <span>Learn More</span>
            </a>
          </div>

          {/* Trust indicators - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-[#1A1A24]/50 border border-[#2D2D3D] backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC700] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">UK Licensed</h3>
              <p className="text-[#A1A1AA] text-sm text-center">UKGC Approved</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-[#1A1A24]/50 border border-[#2D2D3D] backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Secure</h3>
              <p className="text-[#A1A1AA] text-sm text-center">SSL Encrypted</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-[#1A1A24]/50 border border-[#2D2D3D] backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Fast Payouts</h3>
              <p className="text-[#A1A1AA] text-sm text-center">Instant Withdrawals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
