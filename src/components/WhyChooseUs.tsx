export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#111827] border-y border-[#7C3AED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent">
              Why Select Our Platform?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            As a UK-dedicated casino directory showcasing only UK Gambling Commission authorized operators, we offer unique advantages that make us the preferred choice for British gaming enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-5 hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Unbiased & Transparent</h3>
                <p className="text-gray-300 leading-relaxed">
                  We hold zero financial connections with casino providers. Our reviews stay completely neutral, built on real user experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-5 hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">UK Regulatory Specialists</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our exclusive focus on UK Gambling Commission approved casinos means we understand precisely what UK players need and expect.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-5 hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Regular Verification & Updates</h3>
                <p className="text-gray-300 leading-relaxed">
                  We routinely assess gaming libraries, bonus structures, and customer service quality ensuring our data stays current.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-5 hover:border-[#F59E0B]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Player Protection First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We list only casinos offering comprehensive responsible gaming tools, encrypted payment processing, and superior security protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#7C3AED]/40 rounded-xl p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Our Performance</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-300 text-sm">UK Authorized Sites</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent mb-2">60K+</div>
                <div className="text-gray-300 text-sm">Players Assisted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Help Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent mb-2">5★</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}