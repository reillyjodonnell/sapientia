import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import TopicCard, { baseArticle } from '~/components/topic-card';
import { db } from '~/utils/db.server';
import { Link } from '@remix-run/react';

type bothData = {
  // of type LoaderData
  data: LoaderData;
  name: string;
};

type LoaderData = {
  articlePosts: Array<{
    id: string;
    authorOfPost: string;
    authorTwitter: string | null;
    title: string;
    url: string;
    points: number;
    topic: string;
    createdAt: Date;
  }>;
};
export const loader: LoaderFunction = async ({ params }) => {
  const name = params.topicId;

  const data: LoaderData = {
    articlePosts: await db.post.findMany({
      where: {
        topic: name,
      },
    }),
  };
  return json({ data, name });
};

export default function JokeRoute() {
  const [mute, setMute] = useState(false);
  const { data, name } = useLoaderData<bothData>();

  const { articlePosts } = data;

  useEffect(() => {
    const mute = localStorage.getItem('mute');
    const isMuted = mute !== null && JSON.parse(mute);
    setMute(isMuted);
  }, []);

  const toggleAudio = () => {
    mute
      ? localStorage.setItem('mute', 'false')
      : localStorage.setItem('mute', 'true');

    setMute((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center flex-col ml-20 w-[600px] ">
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
      <Outlet />
    </div>
  );
}
