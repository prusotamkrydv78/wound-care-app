import { RiFirstAidKitLine, RiTeamLine } from 'react-icons/ri';

export default function ClinicSolutions() {
  return (
    <main className="bg-[#F8F9FF]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C243C] mb-4">Solutions for Clinics</h1>
          <p className="text-[#8F96AA] mb-10">
            Bring advanced wound care to your clinic with easy-to-use tools and patient engagement.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <RiFirstAidKitLine className="w-10 h-10 text-[#8B6DFF]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Easy Documentation</h3>
                <p className="text-[#8F96AA]">Quickly capture and track wound progress for every patient.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#DDE1EC] flex items-center gap-4">
              <RiTeamLine className="w-10 h-10 text-[#6B7AFF]" />
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Patient Engagement</h3>
                <p className="text-[#8F96AA]">Empower patients with education and self-monitoring tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
