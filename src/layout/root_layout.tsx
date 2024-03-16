import { Outlet } from 'react-router-dom';

import NavBar from './navbar/nav_bar.tsx';
import FooterBar from './footer/footer_bar.tsx';

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default RootLayout;
