'use client';
import { useSidebar } from '@/context/SidebarContext';

const AdminWrapper = ({ children }) => {
  const { isAdminSidebarOpen } = useSidebar();

  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      {children}
    </div>
  );
};

export default AdminWrapper;
