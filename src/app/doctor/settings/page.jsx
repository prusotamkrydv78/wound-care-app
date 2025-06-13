'use client';
import { IoSettingsOutline, IoNotificationsOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';

export default function Settings() {
  const settingSections = [
    {
      title: 'General',
      icon: IoSettingsOutline,
      options: [
        { name: 'Language', value: 'English (US)' },
        { name: 'Time Zone', value: 'GMT-4: Eastern Time' },
      ]
    },
    {
      title: 'Notifications',
      icon: IoNotificationsOutline,
      options: [
        { name: 'Email Notifications', value: 'Enabled' },
        { name: 'Push Notifications', value: 'Enabled for urgent cases' },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: IoShieldCheckmarkOutline,
      options: [
        { name: 'Two-Factor Auth', value: 'Enabled' },
        { name: 'Session Management', value: 'All devices' },
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        
        {settingSections.map((section, i) => {
          const Icon = section.icon;
          return (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {section.options.map((option, j) => (
                  <div key={j} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <span className="text-gray-700">{option.name}</span>
                    <span className="text-gray-500 text-sm">{option.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
