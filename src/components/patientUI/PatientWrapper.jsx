'use client';
import { useSidebar } from '@/context/SidebarContext';

export default function PatientWrapper({ children }) {
  const { isPatientSidebarOpen } = useSidebar();

  return (
    <main className={`
      transition-all duration-300 
      min-h-screen bg-[#F8F9FF] 
      pt-8 pb-8 px-4 sm:px-6 lg:px-8
      ${isPatientSidebarOpen ? 'lg:pl-72' : 'lg:pl-8'}
    `}>
      {children}
    </main>
  );
}
