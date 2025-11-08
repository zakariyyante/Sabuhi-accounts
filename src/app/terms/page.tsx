import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The terms and conditions governing your use of our casino comparison website.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Terms Acceptance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By visiting and utilizing UK Casino Kings, you acknowledge and consent to these Terms & Conditions. 
                Should you disagree with these provisions, please refrain from accessing our platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We retain authority to amend these provisions at our discretion. Ongoing platform usage following 
                updates signifies acceptance of revised terms.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Platform Objective</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                UK Casino Kings functions as an autonomous casino comparison portal delivering UK-authorized 
                online casino details. We operate independently from gambling providers and don't supply gaming services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform serves informational objectives exclusively and targets users aged 18 and above. 
                We neither endorse nor advertise gambling to underage or susceptible persons.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">User Obligations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Platform usage requires your agreement to:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Maintain minimum age of 18 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Apply information ethically and legally exclusively</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Avoid disrupting platform operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Honor intellectual property protections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span>Practice controlled gaming within financial limits</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Casino Selections</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We present casino details derived from autonomous analysis and assessment. 
                Nevertheless, complete information accuracy cannot be assured, as operator terms 
                may shift without warning.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Verification of all details directly with operators before deposits or gameplay remains your duty. 
                We accept no responsibility for losses or damages from recommended casino usage.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Business Arrangements</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We might obtain remuneration from operators when registrations occur via our referrals. This 
                remuneration doesn't affect our selections or assessments, maintaining independence and neutrality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We practice openness regarding business connections while preserving editorial autonomy 
                throughout all content and guidance.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Liability Limitations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Within legal boundaries, UK Casino Kings bears no responsibility for direct, 
                indirect, incidental, special, or consequential damages from platform usage 
                or recommended casino engagement.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This encompasses gambling losses, technical complications, or dependence on 
                platform-provided information.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Responsible Gaming</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We champion responsible gaming advocacy. Suspected gambling concerns warrant consultation with 
                organizations including GamCare or BeGambleAware.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Gaming should provide entertainment value, not financial gain or problem resolution. 
                Avoid wagering beyond comfortable loss thresholds.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Legal Framework and Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms & Conditions follow England and Wales legal principles. 
                Term-related disputes fall under England and Wales court jurisdiction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Consumer status may grant proceedings rights in your residence country 
                courts.
              </p>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Handling</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We pursue equitable, efficient dispute resolution. Complaints regarding our 
                services require following this procedure:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span><strong>Stage 1:</strong> Direct communication to {siteConfig.contact.email} including complaint specifics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span><strong>Stage 2:</strong> Complaint acknowledgment within 5 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span><strong>Stage 3:</strong> Investigation and response delivery within 28 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F59E0B] mr-2">•</span>
                  <span><strong>Stage 4:</strong> Dissatisfaction permits escalation to appropriate UK authorities</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1F2937] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Details</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Terms & Conditions inquiries may be directed to:
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
