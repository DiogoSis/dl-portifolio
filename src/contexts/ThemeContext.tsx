import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeMode, Theme, themes } from '../styles/theme';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = 'dl-portfolio-theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Default to dark mode as requested
  const [themeMode, setThemeModeState] = useState<ThemeMode>('dark');
  const [theme, setTheme] = useState<Theme>(themes.dark);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeModeState(savedTheme);
        setTheme(themes[savedTheme]);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
  }, []);

  // Update CSS variables when theme changes
  useEffect(() => {
    updateCSSVariables(theme);
  }, [theme]);

  const updateCSSVariables = (currentTheme: Theme) => {
    const root = document.documentElement;
    
    // Background colors
    root.style.setProperty('--background', currentTheme.colors.background);
    root.style.setProperty('--background-alt', currentTheme.colors.backgroundAlt);
    root.style.setProperty('--background-card', currentTheme.colors.backgroundCard);
    
    // Text colors
    root.style.setProperty('--text', currentTheme.colors.text);
    root.style.setProperty('--text-secondary', currentTheme.colors.textSecondary);
    root.style.setProperty('--text-inverse', currentTheme.colors.textInverse);
    
    // Primary colors
    root.style.setProperty('--primary', currentTheme.colors.primary);
    root.style.setProperty('--secondary', currentTheme.colors.secondary);
    root.style.setProperty('--tertiary', currentTheme.colors.tertiary);
    root.style.setProperty('--quaternary', currentTheme.colors.quaternary);
    
    // Accent colors
    root.style.setProperty('--accent', currentTheme.colors.accent);
    root.style.setProperty('--accent-alt', currentTheme.colors.accentAlt);
    
    // Utility colors
    root.style.setProperty('--shadow', currentTheme.colors.shadow);
    root.style.setProperty('--border', currentTheme.colors.border);
    root.style.setProperty('--success', currentTheme.colors.success);
    root.style.setProperty('--warning', currentTheme.colors.warning);
    root.style.setProperty('--error', currentTheme.colors.error);

    // Shadows
    root.style.setProperty('--shadow-brutal', currentTheme.shadows.brutal);
    root.style.setProperty('--shadow-brutal-lg', currentTheme.shadows.brutalLg);
    root.style.setProperty('--shadow-brutal-xl', currentTheme.shadows.brutalXl);
    root.style.setProperty('--shadow-brutal-inset', currentTheme.shadows.brutalInset);

    // Borders
    root.style.setProperty('--border-thin', currentTheme.borders.thin);
    root.style.setProperty('--border-medium', currentTheme.borders.medium);
    root.style.setProperty('--border-thick', currentTheme.borders.thick);
    root.style.setProperty('--border-extra-thick', currentTheme.borders.extraThick);

    // Transitions
    root.style.setProperty('--transition-fast', currentTheme.transitions.fast);
    root.style.setProperty('--transition-medium', currentTheme.transitions.medium);
    root.style.setProperty('--transition-slow', currentTheme.transitions.slow);

    // Spacing
    root.style.setProperty('--spacing-xs', currentTheme.spacing.xs);
    root.style.setProperty('--spacing-sm', currentTheme.spacing.sm);
    root.style.setProperty('--spacing-md', currentTheme.spacing.md);
    root.style.setProperty('--spacing-lg', currentTheme.spacing.lg);
    root.style.setProperty('--spacing-xl', currentTheme.spacing.xl);
    root.style.setProperty('--spacing-xxl', currentTheme.spacing.xxl);
    root.style.setProperty('--spacing-xxxl', currentTheme.spacing.xxxl);
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    setTheme(themes[mode]);
    
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  };

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
  };

  const contextValue: ThemeContextType = {
    theme,
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
