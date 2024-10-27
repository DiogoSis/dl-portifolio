import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'regular, monospace', // Fontes monoespaçadas
  },
  palette: {
    primary: {
      main: '#00ff00',
    },
    background: {
      default: '#1b1b1b',
    },
    text: {
      primary: '#00ff00',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)