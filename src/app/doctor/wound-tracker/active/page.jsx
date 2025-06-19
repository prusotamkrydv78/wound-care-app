import { RiFirstAidKitLine } from 'react-icons/ri';
import { MdSearch, MdFilterList } from 'react-icons/md';

export default function ActiveCases() {
  const activeCases = [
    {
      patientName: 'John Doe',
      woundType: 'Pressure Ulcer',
      stage: 'Stage 2',
      status: 'Healing',
      lastUpdated: '2 days ago',
      progress: 75
    },
    // ...more cases
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#1C243C]">Active Cases</h1>
        
        <div className="flex gap-3">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA]" />
            <input
              type="text"
              placeholder="Search cases..."
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg">
            <MdFilterList />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {activeCases.map((care, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-[#DDE1EC]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#6B7AFF]/10 flex items-center justify-center">
                  <RiFirstAidKitLine className="w-6 h-6 text-[#6B7AFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1C243C]">{care.patientName}</h3>
                  <p className="text-sm text-[#8F96AA]">{care.woundType} - {care.stage}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#56E0A0]/10 text-[#56E0A0] text-sm">
                {care.status}
              </span>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#8F96AA]">Healing Progress</span>
                <span className="text-[#1C243C]">{care.progress}%</span>
              </div>
              <div className="h-2 bg-[#DDE1EC] rounded-full">
                <div 
                  className="h-full bg-[#6B7AFF] rounded-full"
                  style={{ width: `${care.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
