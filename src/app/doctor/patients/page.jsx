import { MdSearch, MdFilterList, MdAdd, MdMoreVert } from 'react-icons/md';

export default function PatientRecords() {
  const patients = [
    {
      id: "PT001",
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      condition: "Diabetic Foot Ulcer",
      status: "Active",
      lastVisit: "2024-02-15",
      nextAppointment: "2024-02-22"
    },
    {
      id: "PT002",
      name: "Michael Chen",
      age: 62,
      gender: "Male",
      condition: "Pressure Ulcer",
      status: "Critical",
      lastVisit: "2024-02-14",
      nextAppointment: "2024-02-16"
    },
    {
      id: "PT003",
      name: "Emily Williams",
      age: 35,
      gender: "Female",
      condition: "Surgical Wound",
      status: "Stable",
      lastVisit: "2024-02-10",
      nextAppointment: "2024-02-24"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#1C243C]">Patient Records</h1>
        
        <div className="flex gap-3">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA]" />
            <input
              type="text"
              placeholder="Search patients..."
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg">
            <MdFilterList />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg">
            <MdAdd />
            <span>Add Patient</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F8F9FF]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Patient ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Age</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Condition</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Next Appointment</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDE1EC]">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-[#F8F9FF]">
                <td className="px-6 py-4 text-sm text-[#1C243C]">{patient.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-[#1C243C]">{patient.name}</div>
                    <div className="text-sm text-[#8F96AA]">{patient.gender}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#1C243C]">{patient.age}</td>
                <td className="px-6 py-4 text-sm text-[#1C243C]">{patient.condition}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs
                    ${patient.status === 'Active' ? 'bg-[#56E0A0]/10 text-[#56E0A0]' :
                      patient.status === 'Critical' ? 'bg-[#FF6B6B]/10 text-[#FF6B6B]' :
                        'bg-[#6B7AFF]/10 text-[#6B7AFF]'
                    }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#1C243C]">{patient.nextAppointment}</td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-[#DDE1EC] rounded-lg">
                    <MdMoreVert className="w-5 h-5 text-[#8F96AA]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
