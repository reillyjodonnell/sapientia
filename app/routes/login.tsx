import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Motd from './motd';
import { links as mainContentLinks } from './main-content';
import { Header, links as headerLinks } from './header';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => [
  ...headerLinks(),
  ...mainContentLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];

export default function Login() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
