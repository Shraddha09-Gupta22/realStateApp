import React, { createContext, useContext, useState, useEffect } from 'react';
import { Account } from 'appwrite';

type GlobalContextType = {
  isLoggedIn: boolean;
  loading: boolean;
  refetch: () => void;
};

const GlobalContext = createContext<GlobalContextType>({
  isLoggedIn: false,
  loading: true,
  refetch: () => {},
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      // Add your auth check logic here
      // For example, using Appwrite:
      // const account = new Account(client);
      // const session = await account.getSession('current');
      // setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    setLoading(true);
    checkAuthStatus();
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <GlobalContext.Provider value={{ isLoggedIn, loading, refetch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
