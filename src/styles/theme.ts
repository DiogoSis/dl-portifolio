// Theme configuration for gamified portfolio
export const gamifiedTheme = {
  colors: {
    primary: '#2D82B7', // Azul tech
    secondary: '#FFD700', // Dourado gamificação
    background: '#121212', // Fundo escuro
    text: '#FFFFFF', // Texto branco
    accent: '#00FF00', // Verde neon para destaques
    neonEffect: '0 0 15px rgba(45,130,183,0.7)',
    gridLines: 'rgba(0, 255, 0, 0.1)',
  },
  fonts: {
    header: 'Orbitron, sans-serif', // Fonte gamificada
    body: 'Inter, sans-serif',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  transitions: {
    fast: '0.2s',
    medium: '0.4s',
    slow: '0.6s',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};

export default gamifiedTheme;
