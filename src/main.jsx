import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle.js'
import theme from './styles/theme.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
)
