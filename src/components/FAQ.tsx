'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do all listed casinos hold UK licenses?",
      answer: "Absolutely. Every casino on our platform possesses complete UK Gambling Commission authorization. This ensures compliance with strict UK regulations regarding player protection, fair play standards, and responsible gaming measures for British users."
    },
    {
      question: "Are you exclusively focused on UK-authorized casinos?",
      answer: "Yes, entirely. Our listings contain only UK Gambling Commission approved operators. We evaluate platforms across various criteria including regulatory compliance, gaming variety, bonus terms, customer support quality, banking methods, and player satisfaction. Only premium UK-authorized casinos make our selection."
    },
    {
      question: "How accurate are the displayed bonus promotions?",
      answer: "We perform regular reviews of promotional information, though offers may change. We recommend checking each casino's official site for current bonus details and wagering terms before signing up."
    },
    {
      question: "Are these UK-authorized casinos safe?",
      answer: "Definitely. Every featured platform holds UK Gambling Commission authorization, uses SSL encryption for secure transactions, and follows strict UK responsible gaming requirements."
    },
    {
      question: "Is there a fee for using your comparison platform?",
      answer: "No, our platform is completely free. Though we may receive affiliate commissions when you join through our referrals, this doesn't affect our assessments or your access to promotions."
    },
    {
      question: "What if I experience problems with a casino?",
      answer: "First, contact the casino's support team directly. If the issue persists, you can escalate to appropriate gambling regulators or use their Alternative Dispute Resolution services."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#111827] border-y border-[#7C3AED]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Key details about our casino selection process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl overflow-hidden hover:border-[#F59E0B]/50 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#2D1B4E]/50 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#F59E0B] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-[#7C3AED]/20">
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}