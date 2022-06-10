import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <span className="mt-20 flex justify-center items-center text-3xl">
        Choose a topic ⬅️
      </span>
    </>
  );
}
