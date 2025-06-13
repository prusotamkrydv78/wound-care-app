'use client';
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({});

export function SidebarProvider({ children }) {
  const [isDoctorSidebarOpen, setIsDoctorSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isDoctorSidebarOpen, setIsDoctorSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
