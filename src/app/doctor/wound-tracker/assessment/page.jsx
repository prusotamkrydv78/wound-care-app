import { MdAdd } from 'react-icons/md';

export default function Assessment() {
  const assessments = [
    {
      id: 1,
      patientName: "Sarah Connor",
      date: "2024-02-19",
      woundType: "Pressure Ulcer",
      location: "Sacral Region",
      stage: "Stage 2",
      status: "Needs Review"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#1C243C]">Wound Assessment</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg">
          <MdAdd className="w-5 h-5" />
          <span>New Assessment</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F8F9FF]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Patient</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Wound Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Stage</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDE1EC]">
            {assessments.map((assessment) => (
              <tr key={assessment.id} className="hover:bg-[#F8F9FF]">
                <td className="px-6 py-4 font-medium text-[#1C243C]">{assessment.patientName}</td>
                <td className="px-6 py-4 text-[#4A5468]">{assessment.date}</td>
                <td className="px-6 py-4 text-[#4A5468]">{assessment.woundType}</td>
                <td className="px-6 py-4 text-[#4A5468]">{assessment.location}</td>
                <td className="px-6 py-4 text-[#4A5468]">{assessment.stage}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-[#FF6B6B]/10 text-[#FF6B6B]">
                    {assessment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
