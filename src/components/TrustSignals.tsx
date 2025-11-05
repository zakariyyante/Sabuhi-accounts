export default function TrustSignals() {
  return (
    <section className="py-16 bg-[#111827] border-y border-[#7C3AED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent">
              Why Rely on Our Casino Selection?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our commitment centers on providing honest, independent evaluations of UK Gambling Commission authorized casinos. 
            Every platform we showcase maintains complete UK authorization and has passed rigorous testing and validation procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fully Licensed */}
          <div className="text-center bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-6 hover:border-[#F59E0B]/50 hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">UK Gambling Commission Authorized</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All listed casinos possess complete UK Gambling Commission authorization ensuring player safety
            </p>
          </div>

          {/* Objective Reviews */}
          <div className="text-center bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-6 hover:border-[#F59E0B]/50 hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">UK-Centric Evaluations</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our reviews concentrate solely on UK-authorized platforms based on genuine UK player feedback
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="text-center bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-6 hover:border-[#F59E0B]/50 hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Protected Banking</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every recommended casino employs SSL encryption technology for safe payment processing
            </p>
          </div>

          {/* Always Available Support */}
          <div className="text-center bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-6 hover:border-[#F59E0B]/50 hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🎧</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Round-the-Clock Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              24/7 customer service available across all featured casino platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
