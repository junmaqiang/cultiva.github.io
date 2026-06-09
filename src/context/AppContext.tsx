'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { translations, Language, languageCodes } from '@/lib/i18n/translations';
import { type Locale } from '@/lib/locale';

interface User {
  email: string;
  isGuest: boolean;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const urlLocale = (params.locale as Locale) || 'en';
  
  const [language, setLanguage] = useState<Language>(urlLocale as Language);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlLang = urlLocale === 'zh' ? 'zh' : urlLocale === 'ja' ? 'ja' : 'en';
    if (languageCodes.includes(urlLang)) {
      setLanguage(urlLang as Language);
      localStorage.setItem('language', urlLang);
    }
  }, [urlLocale]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme ? savedTheme === 'true' : prefersDark;
    setIsDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await fetch('/api/auth/verify-code');
        if (response.ok) {
          const data = await response.json();
          if (data.user) {
            setUser(data.user);
          }
        }
      } catch (error) {
        console.debug('Session check skipped in static export mode');
      } finally {
        setIsLoading(false);
      }
    };

    checkUserSession();
  }, []);

  const logout = async () => {
    try {
      await fetch('/api/auth/verify-code', { method: 'DELETE' });
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        t: translations[language] as any,
        isDarkMode,
        toggleDarkMode,
        user,
        setUser,
        isLoading,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
