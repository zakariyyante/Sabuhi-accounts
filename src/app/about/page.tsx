import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#0D9488] to-[#F97316] bg-clip-text text-transparent">About Top 15 Best Casinos UK</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your ultimate resource for discovering the finest UK Gambling Commission licensed casinos with exclusive deals and secure gaming experiences.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Top 15 Best Casinos UK is an independent comparison website specializing in UK Gambling Commission licensed online casinos. 
                With zero affiliations to casino owners, our reviews remain purely objective, focusing entirely on UK player needs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises industry veterans with deep knowledge of the UK gaming market, 
                regulatory frameworks, and player preferences. Every casino undergoes thorough evaluation, 
                from sign-up processes and deposit methods to gameplay and cashout speeds.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We aim to simplify casino selection for UK players by highlighting the top 15 licensed operators. 
                Gambling should be entertaining, protected, and fair - that's why every casino meets our 
                demanding criteria for licensing, security, and player care.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We promote safe gambling and ensure all featured casinos 
                provide adequate tools and support for responsible gaming behavior.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Rank Casinos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every casino undergoes rigorous testing. We evaluate critical factors including:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>UK Gambling Commission licensing and regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Game library depth and software provider quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Bonus value and wagering requirement fairness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Banking variety and withdrawal processing speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Customer service responsiveness and availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Mobile platform performance and usability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#14B8A6] mr-2">•</span>
                  <span>Responsible gambling tools and player protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Promise</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We guarantee honest, impartial casino reviews. Each featured operator 
                undergoes thorough vetting and meets our strict standards 
                for safety, fairness, and player satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We regularly update our rankings to maintain accuracy and remain transparent about 
                any commercial relationships. Our primary goal is helping you make smart 
                decisions about where to play.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Need help choosing the right casino or have questions about our rankings? 
                We're here to help:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> {siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
