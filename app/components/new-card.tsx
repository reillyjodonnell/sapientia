import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import plop from '../../public/sounds/plop-trimmed.mp3';

export interface baseArticle {
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

export default function NewCard({
  title,
  author,
  link = '/',
  upvotes,
  rank,
  image,
  twitterHandle,
  mute,
}: Article) {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [count, setCount] = useState(upvotes ?? 0);
  const [validLink, setValidLink] = useState(false);
  const [linkError, setLinkError] = useState(false);

  const volume: number = mute ? 0 : 0.2;
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
          Link is invalid ????
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex w-30 my-4  shadow-2xl rounded-2xl  border-4 border-solid backdrop-blur-lg bg-[#8080801c]  ${
        upvote
          ? 'border-green-400'
          : downvote
          ? 'border-red-400'
          : ' border-stone-400'
      } px-6 py-8 relative`}
    >
      <div className=" text-white flex flex-col justify-center items-center w-full ">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="rounded-xl"
          />
          <div className="absolute bg-[#00000099] top-2 right-2 flex px-6 py-4 rounded-2xl flex-col items-center justify-center ">
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
              className={`px-1 text-lg font-bold ${
                upvote
                  ? 'text-green-400'
                  : downvote
                  ? 'text-red-400'
                  : 'text-white'
              } `}
            >
              {count > 999 ? formattedNumber : count}
            </span>
            <svg
              onClick={handleDownvote}
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer ${
                downvote ? 'stroke-red-400' : 'stroke-white'
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
        <div className="flex w-full my-8  justify-start items-center">
          <LinkToArticle>
            <span className="flex justify-start items-center cursor-pointer hover:underline decoration-white decoration- hover:text-accent-pink text-3xl max-w-md font-bold ">
              {title}
            </span>
          </LinkToArticle>
        </div>

        <div className="flex mb-8 w-full justify-start items-center">
          <span className=" text-2xl ">{author}</span>
          {twitterHandle && (
            <div className="hover:bg-[#1da0f258] ml-4 flex items-center justify-center p-2 rounded-full">
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  width="30px "
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

        <div className="flex justify-start items-center w-full  ">
          <div className="py-6 w-full flex justify-center items-center border-2 border-white px-4  hover:opacity-100 hover:bg-zinc-900 cursor-pointer rounded-xl">
            <LinkToArticle>
              <span className="flex text-xl font-bold justify-start items-center">
                Read Article
              </span>
            </LinkToArticle>
          </div>
        </div>
      </div>

      {linkError && <ErrorPopup error={linkError} />}
    </div>
  );
}
