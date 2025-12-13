export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Why Choose</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC700]">
              Our Platform?
            </span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto">
            We're dedicated to providing the most comprehensive and trustworthy casino comparisons in the UK market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Features */}
          <div className="space-y-4">
            <div className="group flex items-start gap-4 bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#FFD700]/50 hover:shadow-xl hover:shadow-[#FFD700]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">100% Independent Reviews</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Our rankings are based on genuine testing and player feedback, completely free from operator influence.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#8B5CF6]/50 hover:shadow-xl hover:shadow-[#8B5CF6]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">UK Market Specialists</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Exclusively featuring UKGC-licensed casinos means we understand exactly what UK players need.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Security First</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  We only feature casinos with robust security measures, responsible gambling tools, and verified licensing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-[#1A1A24] to-[#242433] border-2 border-[#2D2D3D] rounded-3xl p-10 shadow-2xl">
            <h3 className="text-white font-black text-2xl mb-8 text-center">Our Impact</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFC700] bg-clip-text text-transparent mb-3">100%</div>
                <div className="text-[#A1A1AA] text-sm font-semibold">UK Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent mb-3">100K+</div>
                <div className="text-[#A1A1AA] text-sm font-semibold">Players Helped</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-[#A1A1AA] text-sm font-semibold">Support Access</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-[#FFD700] to-[#FFC700] bg-clip-text text-transparent mb-3">15+</div>
                <div className="text-[#A1A1AA] text-sm font-semibold">Top Casinos</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-8 border-t border-[#2D2D3D]">
              <div className="flex items-center justify-center gap-3 bg-[#0A0A0F]/50 rounded-xl p-4">
                <svg className="w-8 h-8 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="text-white font-bold">Trusted Platform</div>
                  <div className="text-[#A1A1AA] text-xs">Verified by thousands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
