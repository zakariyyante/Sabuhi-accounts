import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent">About UK Casino Kings</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your premier destination showcasing only UK Gambling Commission authorized online casinos with verified promotions and protected gaming for UK players.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1F2937] border border-[#7C3AED]/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Identity</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                UK Casino Kings operates as an independent platform devoted exclusively to showcasing UK Gambling Commission authorized casinos. 
                With no ownership connections to gambling operators, our evaluations stay thoroughly impartial and prioritize UK player interests.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our roster includes seasoned gambling sector experts familiar with UK market dynamics, 
                UK Gambling Commission standards, and UK player expectations. Each UK-authorized casino undergoes complete testing, 
                covering account creation, deposits, gaming sessions, and withdrawal procedures.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Purpose</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our purpose is straightforward: delivering UK players reliable, current details about premier 
                online casinos accessible to them. Gaming should remain enjoyable, secure, and equitable, which explains 
                why our recommendations meet rigorous standards for authorization, safety, and player welfare.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We advocate responsible gaming practices and verify that recommended casinos 
                offer proper resources and assistance for players requiring support with their gaming habits.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Selection Criteria</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Each casino featured undergoes thorough analysis. Our evaluation encompasses numerous elements such as:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>UK Gambling Commission authorization and adherence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Gaming selection and software partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Promotional packages and playthrough conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Payment methods and cashout timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Support team effectiveness and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Mobile optimization and interface quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Responsible gaming features and assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Pledge</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We commit to consistently delivering truthful, objective casino information. Every 
                listed casino has passed comprehensive scrutiny and satisfies our elevated benchmarks 
                for security, equity, and user contentment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We frequently refresh our content for accuracy and maintain full transparency regarding 
                business partnerships with operators. Our chief objective involves empowering informed 
                gaming destination choices.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Questions regarding our selections or assistance locating your ideal casino? 
                We're available to assist. Contact details:
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
