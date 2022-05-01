import { Header } from './header';
import { Outlet } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from '@remix-run/node';
import { links as mainContentLinks } from './main-content';
import PopularTopics from './popular-topics';
export const links: LinksFunction = () => [
  ...mainContentLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];

export default function index() {
  return (
    <>
      <Header />
      <div className="flex content-center px-6 lg:px-14 py-10">
        <PopularTopics />
        <Outlet />
        {/* <Toolbar /> */}
      </div>
    </>
  );
}
