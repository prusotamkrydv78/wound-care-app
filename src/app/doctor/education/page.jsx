'use client';
import { RiBookReadLine } from 'react-icons/ri';

export default function Education() {
  const resources = [
    { title: 'Wound Care Basics', type: 'Article', duration: '5 min read' },
    { title: 'Advanced Dressing Techniques', type: 'Video', duration: '10 min' },
    { title: 'Patient Care Guidelines', type: 'Document', duration: '15 min read' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Educational Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <RiBookReadLine className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">{resource.title}</h3>
              </div>
              <div className="text-sm text-gray-500">
                <p>{resource.type} • {resource.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
