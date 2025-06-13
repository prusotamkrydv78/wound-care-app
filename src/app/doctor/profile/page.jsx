'use client';
import { RiUserLine, RiMailLine, RiPhoneLine, RiHospitalLine } from 'react-icons/ri';

export default function Profile() {
  const profileSections = [
    {
      title: 'Personal Information',
      items: [
        { label: 'Full Name', value: 'Dr. John Doe', icon: RiUserLine },
        { label: 'Email', value: 'john.doe@hospital.com', icon: RiMailLine },
        { label: 'Phone', value: '(555) 123-4567', icon: RiPhoneLine },
        { label: 'Department', value: 'Wound Care', icon: RiHospitalLine },
      ]
    },
    {
      title: 'Professional Details',
      items: [
        { label: 'License Number', value: 'MD123456' },
        { label: 'Specialization', value: 'Wound Care Specialist' },
        { label: 'Experience', value: '10+ years' },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                          flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. John Doe</h1>
              <p className="text-gray-500">Wound Care Specialist</p>
            </div>
          </div>

          <div className="space-y-8">
            {profileSections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      {item.icon && <item.icon className="w-5 h-5 text-blue-600" />}
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
