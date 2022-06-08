import { Outlet } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { links as mainContentLinks } from '~/components/main-content';
import PopularTopics from '~/components/popular-topics';
import Search from '~/components/search';
import stylesUrl from '~/styles/index.css';
import { useLayoutEffect } from 'react';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Learn() {
  useLayoutEffect(() => {
    document.body.style.backgroundImage =
      'linear-gradient(to top, #1a1a1a, #19191a, #19191a, #181819, #171819, #161719, #15171a, #15161a, #15151b, #16141b, #18131c, #1a111b)';
  }, []);
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
