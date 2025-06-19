import { MdCalendarToday, MdAccessTime, MdPerson, MdAdd } from 'react-icons/md';

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      patientName: "Alice Johnson",
      type: "Wound Assessment",
      time: "09:00 AM",
      date: "2024-02-20",
      status: "Scheduled"
    },
    {
      id: 2,
      patientName: "Robert Smith",
      type: "Follow-up",
      time: "10:30 AM",
      date: "2024-02-20",
      status: "In Progress"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#1C243C]">Appointments</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg">
          <MdAdd className="w-5 h-5" />
          <span>New Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white p-4 rounded-xl border border-[#DDE1EC]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-[#1C243C]">{apt.type}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                apt.status === 'Scheduled' ? 'bg-[#6B7AFF]/10 text-[#6B7AFF]' : 
                'bg-[#56E0A0]/10 text-[#56E0A0]'
              }`}>{apt.status}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#4A5468]">
                <MdPerson className="w-5 h-5" />
                <span>{apt.patientName}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A5468]">
                <MdCalendarToday className="w-5 h-5" />
                <span>{apt.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A5468]">
                <MdAccessTime className="w-5 h-5" />
                <span>{apt.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
