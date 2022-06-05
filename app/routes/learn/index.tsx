import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <span>Choose a topic ⬅️</span>
    </>
  );
}
