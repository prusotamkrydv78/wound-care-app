'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
 
const SessionContext = createContext (null);

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ value, children }) => {
  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};
