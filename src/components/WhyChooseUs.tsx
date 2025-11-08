export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#0F172A] border-y border-[#0D9488]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent">
              What Makes Us Different?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            As the leading UK casino comparison site featuring only top-tier UK Gambling Commission licensed operators, we deliver distinctive benefits that distinguish us in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-5 hover:border-[#14B8A6]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">100% Independent</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain complete independence from all casino operators. Our rankings reflect genuine player feedback and objective testing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-5 hover:border-[#14B8A6]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">UK Market Experts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Specializing solely in UK Gambling Commission regulated platforms ensures we know exactly what British players require.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-5 hover:border-[#14B8A6]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Continuous Monitoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  We regularly test game selections, promotional terms, and support quality to keep information accurate and reliable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-5 hover:border-[#14B8A6]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Security Focused</h3>
                <p className="text-gray-300 leading-relaxed">
                  Only casinos with robust responsible gambling features, secure banking, and top-tier safety measures make our list.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#0D9488]/40 rounded-xl p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">By The Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#F97316] bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-300 text-sm">UK Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#F97316] bg-clip-text text-transparent mb-2">75K+</div>
                <div className="text-gray-300 text-sm">Players Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#F97316] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#F97316] bg-clip-text text-transparent mb-2">15</div>
                <div className="text-gray-300 text-sm">Top Casinos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}