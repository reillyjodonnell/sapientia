import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import plop from '../../../public/sounds/plop-trimmed.mp3';

export const loader: LoaderFunction = async ({ params }) => {
  const topic = { name: params.topicId };
  return json(topic);
};

interface ArticleData extends baseArticle {
  id: number;
}
interface baseArticle {
  title: string;
  author: string;
  link: string;
  upvotes: number;
  image?: string;
  twitterHandle?: string;
}
interface Article extends baseArticle {
  rank?: number;
  mute: boolean;
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

const ResourceLink = ({
  title,
  author,
  link = '/',
  upvotes,
  rank,
  image,
  twitterHandle,
  mute,
}: Article) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [count, setCount] = useState(upvotes ?? 0);
  const [validLink, setValidLink] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const volume: number = mute ? 0 : 0.25;
  const [upvoteSound] = useSound(plop, { soundEnabled: !mute, volume: volume });
  const [downvoteSound] = useSound(plop, {
    soundEnabled: !mute,
    playbackRate: 0.65,
    volume: volume,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });

  useEffect(() => {
    if (link.length > 10) {
      setValidLink(true);
    }
  }, [link]);

  const handleUpvote = () => {
    if (!upvote) {
      upvoteSound();

      setUpvote(true);
      downvote && setDownvote(false);

      if (downvote) {
        setCount((prev) => prev + 2);
      } else {
        setCount((prev) => prev + 1);
      }
    } else {
      setUpvote(false);
      setCount((prev) => prev - 1);
    }
  };

  const handleDownvote = () => {
    if (!downvote) {
      downvoteSound();

      setDownvote(true);
      upvote && setUpvote(false);
      if (upvote) {
        setCount((prev) => prev - 2);
      } else {
        setCount((prev) => prev - 1);
      }
    } else {
      setDownvote(false);
      setCount((prev) => prev + 1);
    }
  };

  const formattedNumber = Intl.NumberFormat('en-us', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count);

  const LinkToArticle = ({ children }: any) => {
    return validLink ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <div onClick={() => setLinkError(true)}>{children}</div>
    );
  };

  const ErrorPopup = (error: any) => {
    useEffect(() => {
      setTimeout(() => {
        setLinkError(false);
      }, 2000);
    }, []);

    return (
      <div
        className={`transition-opacity duration-700 absolute w-30 bg-black ml-10 mt-4 ${
          error ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span
          onClick={() => setLinkError(false)}
          className="absolute px-2 py-0.25 text-xl top-0 right-0 cursor-pointer"
        >
          x
        </span>
        <div className=" w-30 bg-error-bg text-error p-10 bg-accent-error-bg text-accent-error  border-2 border-solid border-accent-error z-10">
          Link is invalid 😔
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-30 my-8 shadow-black shadow-xl rounded-2xl  border-2 border-solid  border-stone-800 py-8  relative">
      <div className=" text-white flex justify-center items-center w-full ">
        <span className="flex justify-center items-center mx-10 mb-auto text-3xl">
          {rank}
        </span>
        <div>
          <LinkToArticle>
            <span className="flex justify-start items-center cursor-pointer hover:underline decoration-white decoration- hover:text-accent-pink mb-4 text-2xl max-w-md font-bold ">
              {title}
            </span>
          </LinkToArticle>
          <div className="flex justify-start items-center my-8">
            <span className=" text-xl ">{author}</span>
            {twitterHandle && (
              <div className="hover:bg-[#1da0f258] ml-4 flex items-center justify-center p-1 rounded-full">
                <a
                  href={`https://twitter.com/${twitterHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className=" cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    width="24px "
                    fill="#1DA1F2"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M22.23 5.924a8.212 8.212 0 01-2.357.646 4.115 4.115 0 001.804-2.27 8.221 8.221 0 01-2.606.996 4.103 4.103 0 00-6.991 3.742 11.647 11.647 0 01-8.457-4.287 4.087 4.087 0 00-.556 2.063 4.1 4.1 0 001.825 3.415 4.09 4.09 0 01-1.859-.513v.052a4.104 4.104 0 003.292 4.023 4.099 4.099 0 01-1.853.07 4.11 4.11 0 003.833 2.85 8.236 8.236 0 01-5.096 1.756 8.33 8.33 0 01-.979-.057 11.617 11.617 0 006.29 1.843c7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.531a8.298 8.298 0 002.047-2.123z" />
                    </g>
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-start items-center mt-8  ">
            <div
              className="flex justify-center items-center border-2 border-white px-4 py-1
            
            
            hover:border-accent-pink
            
            
            cursor-pointer rounded-lg"
            >
              {/* hover:border-accent-pink hover:bg-accent-pink-bg
              hover:text-accent-pink */}
              <LinkToArticle>
                <span className="flex justify-start items-center">
                  Read Article
                </span>
              </LinkToArticle>
            </div>
          </div>
        </div>

        {/* <div className="flex ml-auto">
        <img className="w-30 h-20" src={`${image ? image : Waves}`} />
      </div> */}

        <div className="flex py-1 px-4 rounded-2xl flex-col items-center justify-center  ml-auto">
          <div>
            <svg
              onClick={handleUpvote}
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer ${
                upvote ? 'stroke-green-400' : 'stroke-white'
              }`}
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          </div>
          <span
            className={`px-1 font-bold ${
              upvote
                ? 'text-green-400'
                : downvote
                ? 'text-red-500'
                : 'text-white'
            } `}
          >
            {count > 999 ? formattedNumber : count}
          </span>
          <svg
            onClick={handleDownvote}
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${
              downvote ? 'stroke-red-500' : 'stroke-white'
            }`}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      {linkError && <ErrorPopup error={linkError} />}
    </div>
  );
};

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

      <div className="flex flex-col ">
        {data
          .sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
          .map((item, index) => {
            const rank = index + 1;

            return (
              <ResourceLink
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
