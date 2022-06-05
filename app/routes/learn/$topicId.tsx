import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import TopicCard, { baseArticle } from '~/components/topic-card';
import { db } from '~/utils/db.server';
import { Link } from '@remix-run/react';
import { useSound } from '~/contexts/sound-context';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
type Data = {
  name: string;
};
export const loader: LoaderFunction = async ({ params }) => {
  const name = params?.topicId ?? '';

  return json({ name });
};

export default function Learn() {
  const { name } = useLoaderData<Data>();

  return (
    <>
      <div className="flex justify-center items-center">
        <span
          className="font-bold text-6xl mb-3 capitalize"
          style={{
            textShadow:
              'rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px',
          }}
        >
          {name}
        </span>
        {/* TODO: MOVE THE AUDIO TOGGLE TO THE NAV */}
        {/* <span onClick={toggleAudio} className="ml-12 text-2xl cursor-pointer">
          {mute ? '🔇' : '🔈'}
        </span> */}
      </div>
      <div className="flex flex-col content-center items-center w-full">
        <Outlet />
      </div>
    </>
  );
}
