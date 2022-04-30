import { Header } from './header';
import { Outlet } from '@remix-run/react';
import chevronUp from '../../public/chevron-up.svg';
import chevronDown from '../../public/chevron-down.svg';
import { useState } from 'react';

const ResourceLink = () => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);

  let count = 10;
  return (
    <div className="flex w-full bg-green-100 p-10 justify-center items-center">
      <span>Rank</span>
      <span>Article Title</span>
      <span>Author</span>
      <span>URL</span>
      <div className="flex bg-yellow-200 py-1 px-4 rounded-2xl flex-col items-center justify-center cursor-pointer">
        <div>
          <img onClick={() => setUpvote((prev) => !prev)} src={chevronUp} />
        </div>
        <span
          className={`px-1 font-bold ${
            upvote ? 'text-green-400' : downvote ? 'text-red-400' : 'text-black'
          } `}
        >
          {count}
        </span>
        <div className="" onClick={() => setDownvote((prev) => !prev)}>
          <img src={chevronDown} />
        </div>
      </div>
    </div>
  );
};

export default function index() {
  return (
    <>
      <div className=" bg-black">
        <Header />
        <span>This is the Learn section</span>
      </div>
      <div className="flex items-center content-center flex-col p-10">
        <Outlet />
        <ResourceLink />
      </div>
    </>
  );
}
