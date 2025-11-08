'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you select your top 15 casinos?",
      answer: "Our selection process evaluates UK Gambling Commission licensed operators across multiple factors: licensing compliance, game variety, promotional value, customer service excellence, payment options, and overall player satisfaction. Only the highest-performing casinos earn a spot in our top 15."
    },
    {
      question: "Are all featured casinos UK-licensed?",
      answer: "Yes, absolutely. Each casino in our top 15 holds full UK Gambling Commission licensing, ensuring adherence to stringent UK standards for player safety, fair gaming, and responsible gambling practices."
    },
    {
      question: "How frequently do you update your rankings?",
      answer: "We continuously monitor and update our rankings based on performance metrics, player feedback, and regulatory compliance. Our team reviews each casino monthly to ensure accuracy and relevance."
    },
    {
      question: "Can I trust the bonus offers displayed?",
      answer: "We verify all promotional offers regularly, but terms can change. Always check the casino's official website for the latest bonus details, terms and conditions, and wagering requirements before registering."
    },
    {
      question: "Is your comparison service free to use?",
      answer: "Yes, completely free. While we earn affiliate commissions from some casinos when you register through our links, this never influences our rankings or the offers available to you."
    },
    {
      question: "What should I do if I have issues with a casino?",
      answer: "Contact the casino's customer support immediately. If unresolved, you can escalate complaints to the UK Gambling Commission or use the casino's Alternative Dispute Resolution provider."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0F172A] border-y border-[#0D9488]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#14B8A6] bg-clip-text text-transparent">
              Your Questions Answered
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Everything you need to know about our top 15 casino rankings
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1E293B] border border-[#0D9488]/30 rounded-xl overflow-hidden hover:border-[#14B8A6]/50 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#0D9488]/10 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#14B8A6] transition-transform duration-200 ${
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
                <div className="px-6 pb-5 border-t border-[#0D9488]/20">
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