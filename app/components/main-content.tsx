import { useCallback, useEffect, useRef } from 'react';
import style from '../styles/main-content.css';
import { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import Search from '~/components/search';
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: style }];
};
export const MainContent = () => {
  const talkToTheServer = async () => {
    try {
      const response = await fetch('http://localhost:4000/servercode');
      const data = await response.json();
    } catch (err) {}

    // fetch('http://localhost:4000/server-code').then((res) => {
    // });
  };

  const LeftContent = () => {
    return (
      <div className="w-3/5 ">
        <div className=" h-full pt-py-12 flex justify-start items-center  w-full my-6 ">
          <div className="w-full ">
            <h1
              style={{
                textShadow:
                  ' 0 0 80px rgb(192 219 255 / 30%), 0 0 32px rgb(65 120 255 / 15%)',
              }}
              className="font-extrabold text-[4rem] leading-[4.5rem]"
            >
              Shared knowledge <br /> from the top minds in the programming
              industry
              <br /> - all for free!
            </h1>
          </div>
        </div>
        <div className="text-gray-400 text-3xl  pt-py-12 flex justify-start items-center  w-7/11 my-6  ">
          <div className="w-2/3 ">
            <span className="font-extrabold text-larger leading-7">
              Whether a beginner, learning to code, or a seasoned veteran. Take
              a tour below to get started!
            </span>
          </div>
        </div>
        <div className=" h-full pb-py-12 flex justify-start items-center  w-full my-10">
          <div className="">
            <button className=" cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg border-4 border-transparent font-bold focus-within:border-4 focus-within:border-white focus-within:opacity-100  hover:border-4 hover:border-white hover:opacity-100   ">
              <span onClick={async () => talkToTheServer()}>Take a Tour</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TopicContainer = ({ text }: any) => {
    const link = text.toLowerCase();
    return (
      <Link to={`./learn/${link}`}>
        <div
          className=" 
        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6
        py-3 transition text-primary bg-secondary border-2 border-transparent 
        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink"
        >
          <span className="text-white">{text}</span>
        </div>
      </Link>
    );
  };

  const ChooseATopic = () => {
    return (
      <div className="flex justify-center items-center text-center flex-col">
        <span className="flex p-8">Or choose a topic</span>
        <div className="col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10">
          <TopicContainer text="React" />
          <TopicContainer text="Remix" />
          <TopicContainer text="JavaScript" />
          <TopicContainer text="CSS" />
          <TopicContainer text="Next" />
          <TopicContainer text="Testing" />
          <TopicContainer text="Jest" />
          <TopicContainer text="ACID" />
        </div>
      </div>
    );
  };

  const RightContent = () => {
    return (
      <div className="flex flex-col w-2/5 px-16">
        <Search />
        <ChooseATopic />
      </div>
    );
  };

  return (
    <div className="main-content py-8 px-6 lg:px-12 flex justify-center items-center ">
      <LeftContent />
      <RightContent />
    </div>
  );
};
export default MainContent;
