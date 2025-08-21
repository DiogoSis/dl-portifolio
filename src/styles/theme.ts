// Theme configuration for dual-mode Neubrutalism portfolio
export type ThemeMode = 'light' | 'dark';

interface ThemeColors {
  // Background colors
  background: string;
  backgroundAlt: string;
  backgroundCard: string;
  
  // Text colors
  text: string;
  textSecondary: string;
  textInverse: string;
  
  // Primary colors
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  
  // Accent colors
  accent: string;
  accentAlt: string;
  
  // Utility colors
  shadow: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

interface Theme {
  colors: ThemeColors;
  fonts: {
    header: string;
    body: string;
    mono: string;
  };
  fontWeights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  shadows: {
    brutal: string;
    brutalLg: string;
    brutalXl: string;
    brutalInset: string;
  };
  borders: {
    thin: string;
    medium: string;
    thick: string;
    extraThick: string;
  };
}

// Dark Theme - Gamer Style
const darkTheme: Theme = {
  colors: {
    // Dark backgrounds
    background: '#1B1B1B',
    backgroundAlt: '#2A2A2A',
    backgroundCard: '#1F1F1F',
    
    // Dark text
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    textInverse: '#000000',
    
    // Dark primary colors - neon/gamer
    primary: '#00FF00',
    secondary: '#00D4FF',
    tertiary: '#FF0080',
    quaternary: '#FFFF00',
    
    // Dark accents
    accent: '#00FF88',
    accentAlt: '#FF4444',
    
    // Dark utilities
    shadow: '#000000',
    border: '#00FF00',
    success: '#00FF00',
    warning: '#FFFF00',
    error: '#FF4444',
  },
  fonts: {
    header: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'SF Pixelate, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    fast: '0.15s ease-out',
    medium: '0.3s ease-out',
    slow: '0.5s ease-out',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
  },
  shadows: {
    brutal: '4px 4px 0px #000000',
    brutalLg: '6px 6px 0px #000000',
    brutalXl: '8px 8px 0px #000000',
    brutalInset: 'inset 2px 2px 0px #000000',
  },
  borders: {
    thin: '2px solid #00FF00',
    medium: '3px solid #00FF00',
    thick: '4px solid #00FF00',
    extraThick: '6px solid #00FF00',
  },
};

// Light Theme - Soft Neubrutalism
const lightTheme: Theme = {
  colors: {
    // Light backgrounds - inspired by attached image
    background: '#F5F5DC',        // Beige/cream
    backgroundAlt: '#E6E6FA',     // Lavender
    backgroundCard: '#F0FFFF',    // Azure/light cyan
    
    // Light text
    text: '#000000',
    textSecondary: '#333333',
    textInverse: '#FFFFFF',
    
    // Light primary colors - soft pastels
    primary: '#87CEEB',           // Sky blue
    secondary: '#98FB98',         // Pale green
    tertiary: '#FFB6C1',          // Light pink
    quaternary: '#F0E68C',        // Khaki
    
    // Light accents
    accent: '#FF69B4',            // Hot pink
    accentAlt: '#4169E1',         // Royal blue
    
    // Light utilities
    shadow: '#000000',
    border: '#000000',
    success: '#32CD32',
    warning: '#FFD700',
    error: '#DC143C',
  },
  fonts: {
    header: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'SF Pixelate, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    fast: '0.15s ease-out',
    medium: '0.3s ease-out',
    slow: '0.5s ease-out',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
  },
  shadows: {
    brutal: '4px 4px 0px #000000',
    brutalLg: '6px 6px 0px #000000',
    brutalXl: '8px 8px 0px #000000',
    brutalInset: 'inset 2px 2px 0px #000000',
  },
  borders: {
    thin: '2px solid #000000',
    medium: '3px solid #000000',
    thick: '4px solid #000000',
    extraThick: '6px solid #000000',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type { Theme, ThemeColors };
export { lightTheme, darkTheme };

export default themes;
