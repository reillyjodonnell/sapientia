import { Outlet } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { links as mainContentLinks } from '~/components/main-content';
import PopularTopics from '~/components/popular-topics';
import Search from '~/components/search';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Learn() {
  return (
    <>
      <div className="flex content-center px-6 lg:px-14 my-10 items-start">
        <div className="flex flex-col">
          <div className="mb-4">
            <Search size="medium" handleForm={(e: any) => console.log(e)} />
          </div>
          <div className="flex mt-4">
            <PopularTopics />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mr-40">
          <Outlet />
        </div>

        {/* <div className="flex mt-4">
          <PopularTopics />
        </div> */}
      </div>
    </>
  );
}
