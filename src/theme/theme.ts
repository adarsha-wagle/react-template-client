import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material';

import { Mode } from './utils.ts';
import { getPalette } from './palette.ts';

// Mui Theme Setting
function themeSettings(mode: Mode) {
  return {
    palette: getPalette(mode),
    typography: {
      fontFamily: 'Oswald, sans-serif',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 950,
        lg: 1200,
        xl: 1536,
      },
    },
  };
}

export const useMode = () => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
