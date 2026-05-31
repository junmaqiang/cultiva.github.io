import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, translations } from '@/lib/i18n/translations';

export type ThemeMode = 'light' | 'dark' | 'system';

interface AppState {
  language: Language;
  themeMode: ThemeMode;
  isDarkMode: boolean;
  setLanguage: (lang: Language) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleDarkMode: () => void;
  updateDarkModeFromSystem: () => void;
}

const getSystemPreference = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const computeIsDark = (themeMode: ThemeMode): boolean => {
  if (themeMode === 'system') {
    return getSystemPreference();
  }
  return themeMode === 'dark';
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'en',
      themeMode: 'system',
      isDarkMode: false,

      setLanguage: (lang) => {
        set({ language: lang });
      },

      setThemeMode: (mode) => {
        const isDark = computeIsDark(mode);
        set({ themeMode: mode, isDarkMode: isDark });
        if (typeof document !== 'undefined') {
          if (isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },

      toggleDarkMode: () => {
        const { isDarkMode } = get();
        const newIsDark = !isDarkMode;
        set({ isDarkMode: newIsDark, themeMode: newIsDark ? 'dark' : 'light' });
        if (typeof document !== 'undefined') {
          if (newIsDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },

      updateDarkModeFromSystem: () => {
        const { themeMode } = get();
        if (themeMode === 'system') {
          const isDark = getSystemPreference();
          set({ isDarkMode: isDark });
          if (typeof document !== 'undefined') {
            if (isDark) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }
        }
      },
    }),
    {
      name: 'cultiva100-app-storage',
      partialize: (state) => ({
        language: state.language,
        themeMode: state.themeMode,
        isDarkMode: state.isDarkMode,
      }),
    }
  )
);

export const getTranslation = (language: Language): any => {
  return translations[language];
};
