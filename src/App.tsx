import { ThemeProvider } from '@mui/material';
import { Theme } from '@emotion/react';

import './App.css';

import HomePage from './pages/home_page.tsx';

import { useMode } from './theme/theme.ts';

function App() {
  const [theme] = useMode();
  return (
    <div>
      <ThemeProvider theme={theme as Partial<Theme>}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
