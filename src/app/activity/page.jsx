'use client';
import { RiHistoryLine } from 'react-icons/ri';
import { MdCalendarToday, MdEdit, MdLogin } from 'react-icons/md';

export default function Activity() {
  const activities = [
    {
      icon: MdEdit,
      action: 'Updated patient record',
      patient: 'John Smith',
      time: '2 hours ago',
      type: 'update'
    },
    {
      icon: MdCalendarToday,
      action: 'Scheduled appointment',
      patient: 'Sarah Johnson',
      time: '4 hours ago',
      type: 'schedule'
    },
    {
      icon: MdLogin,
      action: 'Logged into system',
      time: '8 hours ago',
      type: 'system'
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <RiHistoryLine className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Activity Log</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {activities.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <div key={i} className="p-4 hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    {activity.patient && (
                      <p className="text-sm text-gray-500">Patient: {activity.patient}</p>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
