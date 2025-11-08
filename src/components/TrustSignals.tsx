export default function TrustSignals() {
  return (
    <section className="py-16 bg-[#0F172A] border-y border-[#0D9488]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent">
              Why Choose Our Top 15?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We focus on delivering authentic, unbiased reviews of UK Gambling Commission licensed operators. 
            Each featured casino holds valid UK licensing and meets our strict quality benchmarks through extensive verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fully Licensed */}
          <div className="text-center bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-6 hover:border-[#14B8A6]/50 hover:shadow-lg hover:shadow-[#0D9488]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Fully UK Licensed</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every casino listed maintains full UK Gambling Commission licensing for maximum player protection
            </p>
          </div>

          {/* Objective Reviews */}
          <div className="text-center bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-6 hover:border-[#14B8A6]/50 hover:shadow-lg hover:shadow-[#0D9488]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Expert Analysis</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional assessments based exclusively on real UK player experiences and performance data
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="text-center bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-6 hover:border-[#14B8A6]/50 hover:shadow-lg hover:shadow-[#0D9488]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All featured operators use advanced SSL encryption for complete transaction security
            </p>
          </div>

          {/* Always Available Support */}
          <div className="text-center bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-6 hover:border-[#14B8A6]/50 hover:shadow-lg hover:shadow-[#0D9488]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🎧</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">24/7 Assistance</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Non-stop customer support available at every recommended casino site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
