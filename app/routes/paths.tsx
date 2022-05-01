import { Header } from './header';
import { Outlet } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from '@remix-run/node';
import { links as mainContentLinks } from './main-content';
import PopularTopics from './popular-topics';
import Search from '~/components/search';
export const links: LinksFunction = () => [
  ...mainContentLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];

export default function index() {
  return (
    <>
      <Header />
      <div className="flex content-center px-6 lg:px-14 my-10">
        <div className="flex flex-col">
          <div className="mb-4">
            <Search size="medium" handleForm={(e: any) => console.log(e)} />
          </div>
          <div className="flex mt-4">
            <PopularTopics />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
