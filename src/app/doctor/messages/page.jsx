'use client';
import { RiMessage2Line } from 'react-icons/ri';

export default function Messages() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 p-4">
            <h2 className="font-semibold text-gray-900">Recent Conversations</h2>
          </div>
          
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <RiMessage2Line className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr. Smith</p>
                  <p className="text-sm text-gray-500">Latest message preview...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
