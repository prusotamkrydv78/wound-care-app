import { MdShield, MdAnalytics } from 'react-icons/md';

export default function HospitalSolutions() {
  return (
    <main className="bg-[#F8F9FF]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C243C] mb-4">Solutions for Hospitals</h1>
          <p className="text-[#8F96AA] mb-10">
            Streamline wound care across your organization with centralized analytics and compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <MdAnalytics className="w-10 h-10 text-[#5698FF]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Centralized Analytics</h3>
                <p className="text-[#8F96AA]">Monitor outcomes and performance across all departments.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <MdShield className="w-10 h-10 text-[#56E0A0]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Compliance</h3>
                <p className="text-[#8F96AA]">HIPAA-compliant data management and reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
