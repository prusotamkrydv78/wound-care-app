'use client';
import { useSidebar } from '@/context/SidebarContext';

export default function MainWrapper({ children }) {
    const { isOpen, setIsOpen } = useSidebar();

    const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
    const isAuthPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/auth');
    if (isHomePage || isAuthPage) {
        setIsOpen(false);
    }

    else {
        setIsOpen(true);
    }

    return (
        <main
            className={`
        transition-all duration-300 
        min-h-screen bg-[#F8F9FF] 
        ${isHomePage || isAuthPage ? '!p-0' : 'pt-8 pb-8 px-4 sm:px-6 lg:px-8'}
        ${isOpen ? 'lg:pl-72' : 'lg:pl-8'}
      `}
        >
            {children}
        </main>
    );
}
