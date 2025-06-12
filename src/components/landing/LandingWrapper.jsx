'use client';
import { useEffect } from 'react';
import { useSidebar } from '@/context/SidebarContext';

export default function LandingWrapper({ children }) {
  const { setIsOpen } = useSidebar();

  useEffect(() => {
    setIsOpen(false);
    return () => setIsOpen(true);
  }, [setIsOpen]);

  return <>{children}</>;
}
