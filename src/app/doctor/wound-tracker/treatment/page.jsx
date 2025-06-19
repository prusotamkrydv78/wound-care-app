import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';

export default function TreatmentPlans() {
  const treatments = [
    {
      id: 1,
      patientName: "John Doe",
      woundType: "Diabetic Ulcer",
      startDate: "2024-02-01",
      status: "Active",
      progress: 65,
      nextReview: "2024-02-22"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#1C243C]">Treatment Plans</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg">
          <MdAdd className="w-5 h-5" />
          <span>New Treatment Plan</span>
        </button>
      </div>

      <div className="grid gap-4">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="bg-white p-6 rounded-xl border border-[#DDE1EC]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-[#1C243C]">{treatment.patientName}</h3>
                <p className="text-[#8F96AA]">{treatment.woundType}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-[#F8F9FF] rounded-lg">
                  <MdEdit className="w-5 h-5 text-[#6B7AFF]" />
                </button>
                <button className="p-2 hover:bg-[#F8F9FF] rounded-lg">
                  <MdDelete className="w-5 h-5 text-[#FF6B6B]" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#8F96AA]">Progress</span>
                <span className="text-[#1C243C]">{treatment.progress}%</span>
              </div>
              <div className="h-2 bg-[#DDE1EC] rounded-full">
                <div 
                  className="h-full bg-[#6B7AFF] rounded-full"
                  style={{ width: `${treatment.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
