import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from '@remix-run/node';
import { Header, links as headerLinks } from './header';
import Motd from './motd';
import { MainContent, links as mainContentLinks } from './main-content';
import { Outlet } from '@remix-run/react';

export const links: LinksFunction = () => [
  ...headerLinks(),
  ...mainContentLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];
export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Motd />
      </div>
      <Header />
      <Outlet />
      <MainContent />
    </div>
  );
}
