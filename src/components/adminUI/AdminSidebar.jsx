'use client';
import { useSidebar } from '@/context/SidebarContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard, MdPeople, MdVerifiedUser, MdArticle,
  MdAnalytics, MdSettings, MdSupport, MdMenu, MdClose
} from 'react-icons/md';
import {
  RiUserHeartLine, RiStethoscopeLine, RiFileTextLine,
  RiBarChartLine, RiCustomerServiceLine
} from 'react-icons/ri';

const AdminSidebar = () => {
  const { isAdminSidebarOpen, setIsAdminSidebarOpen } = useSidebar();
  const pathname = usePathname();

  const navigationItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: MdDashboard
    },
    {
      title: 'User Management',
      href: '/admin/users',
      icon: MdPeople
    },
    {
      title: 'Doctor Verification',
      href: '/admin/doctors',
      icon: RiStethoscopeLine
    },
    {
      title: 'Patient Management',
      href: '/admin/patients',
      icon: RiUserHeartLine
    },
    {
      title: 'Content Management',
      href: '/admin/content',
      icon: RiFileTextLine
    },
    {
      title: 'Analytics & Reports',
      href: '/admin/analytics',
      icon: RiBarChartLine
    },
    {
      title: 'System Settings',
      href: '/admin/settings',
      icon: MdSettings
    },
    {
      title: 'Support Center',
      href: '/admin/support',
      icon: RiCustomerServiceLine
    }
  ];

  const isActive = (href) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  const toggleSidebar = () => {
    setIsAdminSidebarOpen(!isAdminSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-[#DDE1EC]"
      >
        <MdMenu className="w-6 h-6 text-[#1C243C]" />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#DDE1EC]
        transform transition-transform duration-300 ease-in-out
        ${isAdminSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 flex flex-col
      `}>
        {/* Header */}
        <div className="p-6 border-b border-[#DDE1EC]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] rounded-lg flex items-center justify-center">
                <MdSettings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[#1C243C]">Admin Portal</h1>
                <p className="text-xs text-[#8F96AA]">System Management</p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 hover:bg-[#F8F9FF] rounded"
            >
              <MdClose className="w-5 h-5 text-[#8F96AA]" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                  ${active
                    ? 'bg-[#6B7AFF] text-white shadow-sm'
                    : 'text-[#8F96AA] hover:bg-[#F8F9FF] hover:text-[#1C243C]'
                  }
                `}
                onClick={() => setIsAdminSidebarOpen(false)}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#DDE1EC]">
          <div className="flex items-center gap-3 px-3 py-2 text-[#8F96AA]">
            <div className="w-8 h-8 bg-[#8B6DFF]/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-[#8B6DFF]">A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1C243C]">Admin User</p>
              <p className="text-xs text-[#8F96AA]">System Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isAdminSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsAdminSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
