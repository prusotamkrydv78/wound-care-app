'use client';
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({});

export function SidebarProvider({ children }) {
  const [isDoctorSidebarOpen, setIsDoctorSidebarOpen] = useState(true);
  const [isPatientSidebarOpen, setIsPatientSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{
      isDoctorSidebarOpen,
      setIsDoctorSidebarOpen,
      isPatientSidebarOpen,
      setIsPatientSidebarOpen
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
