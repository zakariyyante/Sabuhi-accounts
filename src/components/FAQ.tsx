'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you select your top casino recommendations?",
      answer: "We evaluate UK Gambling Commission licensed operators across multiple critical factors: licensing compliance, game variety, bonus value, customer service quality, payment methods, security measures, and player feedback. Only casinos that excel across all criteria make our list."
    },
    {
      question: "Are all featured casinos UK-licensed?",
      answer: "Absolutely. Every casino featured on our platform holds full UK Gambling Commission licensing, ensuring compliance with strict UK standards for player protection, fair gaming, and responsible gambling."
    },
    {
      question: "How often are rankings updated?",
      answer: "We continuously monitor casino performance and update rankings in real-time. Our team conducts comprehensive monthly reviews of each casino to ensure our information remains accurate and current."
    },
    {
      question: "Can I trust the bonus offers shown?",
      answer: "We verify all promotional offers regularly, but terms can change. Always review the casino's official website for the latest bonus details, terms and conditions, and wagering requirements before signing up."
    },
    {
      question: "Is your service completely free?",
      answer: "Yes, 100% free. We may earn affiliate commissions when you sign up through our links, but this never affects our rankings, reviews, or the offers available to you."
    },
    {
      question: "What if I have problems with a casino?",
      answer: "First, contact the casino's customer support. If issues persist, escalate to the UK Gambling Commission or use the casino's Alternative Dispute Resolution (ADR) provider for independent mediation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#10B981] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC700]">
              Frequently Asked
            </span>{' '}
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-lg text-[#A1A1AA]">
            Everything you need to know about our casino recommendations
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-[#1A1A24] border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-[#FFD700]/50 shadow-xl shadow-[#FFD700]/10' 
                  : 'border-[#2D2D3D] hover:border-[#FFD700]/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-[#FFD700] to-[#FFC700]' 
                      : 'bg-[#242433] group-hover:bg-[#2D2D3D]'
                  }`}>
                    <span className={`font-bold text-sm ${
                      openIndex === index ? 'text-black' : 'text-[#FFD700]'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg pr-4 group-hover:text-[#FFD700] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      openIndex === index 
                        ? 'rotate-180 text-[#FFD700]' 
                        : 'text-[#A1A1AA] group-hover:text-[#FFD700]'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-[#2D2D3D] animate-fade-in">
                  <p className="text-[#A1A1AA] leading-relaxed pt-4 pl-12">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-[#A1A1AA] mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A24] border-2 border-[#2D2D3D] text-white font-bold rounded-xl hover:border-[#FFD700] transition-all duration-300"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
