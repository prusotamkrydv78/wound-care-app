import Link from 'next/link';
import { MdArrowForward, MdCheck } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine } from 'react-icons/ri';

export default function DoctorSolutions() {
  return (
    <main className="bg-[#F8F9FF]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              Built for Medical Professionals
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Streamline your wound care practice with AI-powered assessment tools and real-time analytics.
            </p>
            <Link href="/auth/register" 
                  className="inline-flex items-center bg-white px-6 py-3 rounded-xl text-[#6B7AFF] font-medium
                           hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              Start Free Trial
              <MdArrowForward className="ml-2"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <RiFirstAidKitLine className="w-10 h-10 text-[#8B6DFF]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">AI Assessment</h3>
                <p className="text-[#8F96AA]">Automated wound measurement and healing prediction.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <RiTeamLine className="w-10 h-10 text-[#6B7AFF]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Collaboration</h3>
                <p className="text-[#8F96AA]">Share cases and consult with specialists in real time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
