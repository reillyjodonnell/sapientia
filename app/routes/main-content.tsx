import { useCallback, useEffect, useRef } from 'react';
import style from '../styles/main-content.css';
import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: style }];
};
export const MainContent = () => {
  const searchBar = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    if (event.metaKey === true && event.key === 'k') {
      if (searchBar.current !== null && labelRef.current !== null) {
        searchBar.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

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
            <button className=" cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg border-4 opacity-90 border-transparent font-bold focus-within:border-4 focus-within:border-white focus-within:opacity-100  hover:border-4 hover:border-white hover:opacity-100   ">
              <span>Take a Tour</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SearchBar = () => {
    //padding-right was 16
    return (
      <div className="main-search  mx-15 flex  relative">
        <form className="flex w-full">
          <div
            ref={labelRef}
            className="flex
             sm:flex items-center w-full text-left
              space-x-3 px-4 
               shadow-sm rounded-lg text-slate-800
              dark:ring-0 dark:text-slate-800
              dark:highlight-white/5  
              z-50
               border-4 border-white
               bg-white
              focus-within:border-4 focus-within:border-solid focus-within:border-accent-green
              h-16
              z-100
              
              
              "
          >
            <span className="text-2xl">🔍</span>
            <input
              ref={searchBar}
              placeholder="Search a topic"
              style={{ outline: 'none' }}
              className="text-xl
                
                
                
                
                
                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
            ></input>
            <kbd
              className="font-sans font-semibold dark:text-slate-500
              
              
              text-xl
              "
            >
              <abbr
                title="Command"
                className="no-underline text-slate-300 dark:text-slate-500
                  
                  text-xl
                  
                  "
              >
                ⌘
              </abbr>
              K
            </kbd>
          </div>
        </form>
      </div>
    );
  };

  const TopicContainer = ({ text }: any) => {
    return (
      <div
        className=" 
        relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6
        py-3 transition text-primary bg-secondary border-2 border-transparent 
        bg-[#71717154] hover:brightness-150 hover:border-2 hover:border-accent-pink"
      >
        <Link to={`./learn/${text}`}>
          <span className="text-white">{text}</span>
        </Link>
      </div>
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
        <SearchBar />
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
