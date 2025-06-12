'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard, MdCalendarMonth, MdNotifications } from 'react-icons/md';
import { RiFirstAidKitLine, RiMessage2Line, RiBookReadLine, RiUserLine, RiHistoryLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoChevronDownOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {
  const pathname = usePathname();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', icon: MdDashboard, href: '/dashboard' },
    { name: 'Calendar', icon: MdCalendarMonth, href: '/calendar' },
    { name: 'Wound Tracker', icon: RiFirstAidKitLine, href: '/wound-tracker' },
    { name: 'Messages', icon: RiMessage2Line, href: '/messages' },
    { name: 'Education', icon: RiBookReadLine, href: '/education' },
  ];

  const profileLinks = [
    { name: 'My Profile', icon: RiUserLine, href: '/profile' },
    { name: 'Settings', icon: IoSettingsOutline, href: '/settings' },
    { name: 'Activity Log', icon: RiHistoryLine, href: '/activity' },
    { name: 'Logout', icon: IoLogOutOutline, href: '/auth/login' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg 
                          flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-bold">+</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 
                           bg-clip-text text-transparent">
              WoundCare
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            flex items-center space-x-2 hover:bg-blue-50 hover:text-blue-600
                            ${pathname === link.href 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'text-gray-600'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600
                         transition-colors duration-200 relative"
            >
              <MdNotifications className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 
                           hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                <FaUserCircle className="w-6 h-6" />
                <IoChevronDownOutline className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsProfileOpen(false)}
                  />
                  
                  {/* Menu */}
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border 
                                border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Dr. John Doe</p>
                      <p className="text-xs text-gray-500 mt-1">john.doe@hospital.com</p>
                    </div>

                    <div className="py-2">
                      {profileLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700
                                     hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{link.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from left */}
      <div className="md:hidden">
        <div className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm z-40" 
             onClick={() => setMobileMenuOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-4">
          {/* Mobile navigation content */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
