'use client';
import { RiFirstAidKitLine } from 'react-icons/ri';

export default function WoundTracker() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Wound Tracker</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Cases</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <RiFirstAidKitLine className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Case #{i + 1}</p>
                      <p className="text-sm text-gray-500">Last updated: 2 hours ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
