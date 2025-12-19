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
                  <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">About {siteConfig.name}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your go-to comparison platform for the top 10 UKGC licensed casino operators, featuring verified promotions and trusted gaming environments.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1E293B] border border-[#0D9488]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {siteConfig.name} is an independent casino comparison platform dedicated to showcasing the UK's finest UKGC licensed operators. 
                We maintain complete independence from casino brands, ensuring our assessments remain unbiased and player-focused.
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
                Our goal is to streamline casino selection by featuring only the top 10 UK licensed platforms. 
                We believe gaming should be entertaining, secure, and transparent - which is why each casino satisfies our 
                strict standards for licensing, safety protocols, and customer support.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We champion responsible gambling practices and verify that all listed casinos 
                offer comprehensive tools and resources for safe gaming.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Rank Casinos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Each casino undergoes comprehensive evaluation. We assess essential criteria such as:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>UK Gambling Commission licensing and compliance verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Gaming portfolio diversity and provider reputation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Promotional value and reasonable wagering terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Payment method range and cashout processing times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Support team quality and response efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Mobile experience optimization and functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3B82F6] mr-2">•</span>
                  <span>Player protection features and responsible gaming resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Promise</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We commit to delivering honest, unbiased casino evaluations. Every featured platform 
                passes rigorous screening and satisfies our demanding criteria 
                for security, legitimacy, and user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our rankings receive continuous updates for accuracy, and we maintain full transparency regarding 
                commercial partnerships. Your informed gaming choices are our top priority.
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
