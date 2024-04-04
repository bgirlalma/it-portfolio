import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GlobalStyled } from '../GlobalStyled';

const Layout = () => {
  return (
    <>
      <Header />
      <GlobalStyled />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
