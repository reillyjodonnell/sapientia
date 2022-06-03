import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import TopicCard, { baseArticle } from '~/components/topic-card';

export const loader: LoaderFunction = async ({ params }) => {
  const topic = { name: params.topicId };
  return json(topic);
};

interface ArticleData extends baseArticle {
  id: number;
}
const data: Array<ArticleData> = [
  {
    title: 'React Fundamentals: Props vs State',
    author: 'Kent C. Dodds',
    link: 'https://kentcdodds.com/blog/props-vs-state',
    id: 0,
    upvotes: 69,
    twitterHandle: 'kentcdodds',
  },
  {
    title: 'When to useMemo and useCallback',
    author: 'Kent C. Dodds',
    link: 'https://kentcdodds.com/blog/usememo-and-usecallback',
    id: 1,
    upvotes: 426,
    twitterHandle: 'kentcdodds',
  },
  {
    title: 'How to React ⚛️',
    author: 'Kent C. Dodds',
    link: 'https://kentcdodds.com/blog/how-to-react',
    id: 2,
    upvotes: 780,
    twitterHandle: 'kentcdodds',
  },
  {
    title: 'How to use React Context effectively',
    author: 'Kent C. Dodds',
    link: 'https://kentcdodds.com/blog/how-to-use-react-context-effectively',
    id: 3,
    upvotes: 820,
    twitterHandle: 'kentcdodds',
  },
  {
    title: 'A Complete Guide To useEffect',
    author: 'Dan Abramov',
    link: 'https://overreacted.io/a-complete-guide-to-useeffect/',
    id: 4,
    upvotes: 70382,
    twitterHandle: 'dan_abramov',
  },
  {
    title: 'React Fundamentals: Props vs State',
    author: 'Kent C. Dodds',
    link: 'https://kentcdodds.com/blog/props-vs-state',
    id: 5,
    upvotes: 69949,
    twitterHandle: 'kentcdodds',
  },
  {
    title: 'Heres an uneccessarily long title wihosanoinasd oinsdfoinsdf',
    author: 'anonymous',
    link: '',
    id: 6,
    upvotes: 69420,
  },
  {
    title: 'Exactly 1000 upvotes',
    author: 'anonymous',
    link: '',
    id: 7,
    upvotes: 1000,
  },
];

export default function JokeRoute() {
  const [mute, setMute] = useState(false);
  const topic = useLoaderData();
  const name: string = topic.name;

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
    <div className="flex justify-center items-center flex-col ">
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
        <span onClick={toggleAudio} className="ml-12 text-2xl cursor-pointer">
          {mute ? '🔇' : '🔈'}
        </span>
      </div>
      <div className="flex flex-col text-xl mt-8">
        <button className=" px-10 py-4 rounded-lg border-4 border-white hover:border-accent-pink hover:bg-accent-pink-bg active:border-accent-pink active:bg-accent-pink-bg ">
          + Add Article
        </button>
      </div>

      <div className="flex flex-col ">
        {data
          .sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
          .map((item, index) => {
            const rank = index + 1;

            return (
              <TopicCard
                mute={mute}
                author={item.author}
                title={item.title}
                link={item.link}
                upvotes={item.upvotes}
                key={item.id}
                rank={rank}
                twitterHandle={item.twitterHandle}
              />
            );
          })}
      </div>
    </div>
  );
}
