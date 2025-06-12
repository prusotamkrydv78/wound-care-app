'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard, MdCalendarMonth, MdNotifications, MdExpandMore, MdOutlineAnalytics } from 'react-icons/md';
import { RiFirstAidKitLine, RiMessage2Line, RiBookReadLine, RiUserLine, RiHistoryLine, RiTeamLine } from 'react-icons/ri';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';
import { useSidebar } from '@/context/SidebarContext';

const Sidebar = () => {
    const { isOpen, setIsOpen } = useSidebar();
    const pathname = usePathname();
    const isLandingPage = pathname === '/';

    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (key) => {
        setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const navigation = [
        {
            title: 'MAIN',
            items: [
                { name: 'Dashboard', icon: MdDashboard, href: '/dashboard' },
                { name: 'Analytics', icon: MdOutlineAnalytics, href: '/analytics' },
            ]
        },
        {
            title: 'PATIENT CARE',
            items: [
                {
                    name: 'Wound Management',
                    icon: RiFirstAidKitLine,
                    submenu: true,
                    href: '/wound-tracker',
                    children: [
                        { name: 'Active Cases', href: '/wound-tracker/active' },
                        { name: 'Assessment', href: '/wound-tracker/assessment' },
                        { name: 'Treatment Plans', href: '/wound-tracker/treatment' },
                    ]
                },
                { name: 'Appointments', icon: MdCalendarMonth, href: '/calendar' },
                { name: 'Patient Records', icon: RiTeamLine, href: '/patients' },
            ]
        },
        {
            title: 'COMMUNICATION',
            items: [
                { name: 'Messages', icon: RiMessage2Line, href: '/messages' },
                { name: 'Notifications', icon: MdNotifications, href: '/notifications' },
            ]
        },
        {
            title: 'RESOURCES',
            items: [
                { name: 'Education', icon: RiBookReadLine, href: '/education' },
                { name: 'Activity Log', icon: RiHistoryLine, href: '/activity' },
            ]
        },
    ];

    const renderNavItem = (item) => {
        const isActive = pathname === item.href;
        const isOpen = openMenus[item.name];

        return (
            <div key={item.name}>
                {item.submenu === undefined &&
                    <Link
                        href={item.submenu ? '/' : item.href}
                        onClick={() => item.submenu && toggleMenu(item.name)}
                        className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium
                     transition-all duration-200 group ${isActive
                                ? 'bg-[#F8F9FF] text-[#6B7AFF]'
                                : 'text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]'}`}
                    >
                        <div className="flex items-center gap-2.5">
                            <item.icon className={`w-4.5 h-4.5 ${isActive ? 'text-[#6B7AFF]' : 'text-[#8F96AA] group-hover:text-[#6B7AFF]'
                                }`} />
                            <span className="tracking-tight">{item.name}</span>
                        </div>
                        {item.submenu && (
                            <MdExpandMore className={`w-4 h-4 transition-transform duration-200 
                                  text-[#8F96AA] ${isOpen ? 'rotate-180' : ''}`} />
                        )}
                    </Link>}
                {item.submenu &&
                    <div

                        onClick={() => item.submenu && toggleMenu(item.name)}
                        className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium
                     transition-all duration-200 group cursor-pointer ${isActive
                                ? 'bg-[#F8F9FF] text-[#6B7AFF]'
                                : 'text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]'}`}
                    >
                        <div className="flex items-center gap-2.5">
                            <item.icon className={`w-4.5 h-4.5 ${isActive ? 'text-[#6B7AFF]' : 'text-[#8F96AA] group-hover:text-[#6B7AFF]'
                                }`} />
                            <span className="tracking-tight">{item.name}</span>
                        </div>
                        {item.submenu && (
                            <MdExpandMore className={`w-4 h-4 transition-transform duration-200 
                                  text-[#8F96AA] ${isOpen ? 'rotate-180' : ''}`} />
                        )}
                    </div>
                }
                {item.submenu && isOpen && (
                    <div className="ml-3 mt-1 pl-3 border-l border-[#DDE1EC]">
                        {item.children.map((child) => (
                            <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-2.5 py-1.5 rounded-lg text-[13px] my-0.5
                         ${pathname === child.href
                                        ? 'text-[#6B7AFF] bg-[#F8F9FF]'
                                        : 'text-[#8F96AA] hover:text-[#6B7AFF] hover:bg-[#F8F9FF]'}`}
                            >
                                {child.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    if (isLandingPage) return null;

    return (
        <>
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#DDE1EC] transform transition-transform duration-300 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo - More Compact */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-[#DDE1EC]">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#506EFF] rounded-lg 
                     flex items-center justify-center shadow-md">
                        <span className="text-white text-lg font-bold select-none">+</span>
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] 
                    bg-clip-text text-transparent">WoundCare</span>
                </div>

                {/* Navigation - More Compact */}
                <div className="p-3 space-y-6 overflow-y-auto h-[calc(100vh-8rem)]">
                    {navigation.map((section) => (
                        <div key={section.title} className="space-y-1">
                            <h3 className="text-[11px] font-semibold text-[#8F96AA] px-2.5 mb-2 uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <div>{section.items.map(renderNavItem)}</div>
                        </div>
                    ))}
                </div>

                {/* User Profile - More Compact */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-[#DDE1EC]">
                    <div className="p-3">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F8F9FF]">
                            <div className="w-8 h-8 rounded-lg bg-[#6B7AFF]/10 flex items-center justify-center">
                                <RiUserLine className="w-4 h-4 text-[#6B7AFF]" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[#1C243C] truncate">Dr. John Doe</p>
                                <p className="text-xs text-[#8F96AA] truncate">Specialist</p>
                            </div>
                            <IoSettingsOutline className="w-4 h-4 text-[#8F96AA] hover:text-[#6B7AFF]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-4 top-4 z-50 p-2 rounded-lg bg-white border border-[#DDE1EC] lg:hidden"
            >
                <svg className="w-6 h-6 text-[#1C243C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </>
    );
};

export default Sidebar;
