'use client';
import { MdCalendarToday, MdAccessTime } from 'react-icons/md';

export default function Calendar() {
  const appointments = [
    { time: '09:00 AM', patient: 'John Smith', type: 'Follow-up' },
    { time: '10:30 AM', patient: 'Sarah Johnson', type: 'Initial Assessment' },
    { time: '02:00 PM', patient: 'Mike Williams', type: 'Wound Dressing' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
            <MdCalendarToday className="w-5 h-5 text-gray-500" />
          </div>
          
          <div className="space-y-4">
            {appointments.map((apt, i) => (
              <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-blue-600">
                    <MdAccessTime className="w-5 h-5" />
                    <span className="ml-2 font-medium">{apt.time}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{apt.patient}</p>
                    <p className="text-sm text-gray-500">{apt.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
