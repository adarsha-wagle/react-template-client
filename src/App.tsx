import React, { Suspense, useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Theme } from '@emotion/react';

import './global.css';

import RootLayout from './layout/root_layout.tsx';

import { themeSettings } from './theme/theme.ts';
import { ThemeMode } from './types/theme_type.ts';

const LazyHomePage = React.lazy(() => import('./pages/home_page.tsx'));
const LazyAboutPage = React.lazy(() => import('./pages/about_page.tsx'));

function App() {
  const themeMode = useSelector((state: { theme: { mode: ThemeMode } }) => state.theme.mode);

  const theme = useMemo(() => createTheme(themeSettings(themeMode)), [themeMode]);

  /* eslint-disable implicit-arrow-linebreak */
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route index element={<LazyHomePage />} />
            <Route path="/about" element={<LazyAboutPage />} />
          </Route>
        )
      ),

    [] /* eslint-enable implicit-arrow-linebreak */
  );

  return (
    <ThemeProvider theme={theme as Partial<Theme>}>
      <CssBaseline />
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
