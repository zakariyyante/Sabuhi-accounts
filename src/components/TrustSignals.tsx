export default function TrustSignals() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0A0F] to-[#0F0F14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-white">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC700]">
              Commitment
            </span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto">
            Every casino we recommend is thoroughly vetted for safety, fairness, and player protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fully Licensed */}
          <div className="group text-center bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#FFD700]/50 hover:shadow-xl hover:shadow-[#FFD700]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#FFD700] transition-colors">UK Licensed</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              100% UKGC approved casinos with verified licensing
            </p>
          </div>

          {/* Objective Reviews */}
          <div className="group text-center bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#8B5CF6]/50 hover:shadow-xl hover:shadow-[#8B5CF6]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#8B5CF6] transition-colors">Expert Reviews</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Unbiased analysis based on real player data
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="group text-center bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#10B981] transition-colors">Secure Payments</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              SSL encrypted transactions for total safety
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="group text-center bg-[#1A1A24] border border-[#2D2D3D] rounded-2xl p-6 hover:border-[#FFD700]/50 hover:shadow-xl hover:shadow-[#FFD700]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#FFD700] transition-colors">24/7 Support</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Round-the-clock customer service available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
