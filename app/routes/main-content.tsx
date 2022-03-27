import React, { useCallback, useEffect, useRef } from 'react';
import style from '../styles/main-content.css';
import type { LinksFunction } from 'remix';
import Motd from './motd';

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

  return (
    <div className="main-content flex flex-col ">
      <div className="px-12  h-full pt-py-12 flex justify-start items-center  w-full my-6 ">
        <div className="w-3/5 ">
          <h1
            style={{
              textShadow:
                ' 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%)',
            }}
            className="font-extrabold text-[4rem] leading-[4.5rem]"
          >
            Shared knowledge <br /> from the top minds in the programming
            industry
            <br /> - all for free!
          </h1>
        </div>

        <div className="main-search px-16 mx-15 flex w-2/5">
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
              <input
                ref={searchBar}
                placeholder="Search a topic 🔥"
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
      </div>
      <div className="text-gray-400 text-3xl  pt-py-12 flex justify-start items-center  w-7/11 my-6  ">
        <div className="w-2/3 px-12">
          <span className="font-extrabold text-larger leading-7">
            Whether a beginner, learning to code, or a seasoned veteran. Take a
            tour below to get started!
          </span>
        </div>
      </div>
      <span></span>
      <div className=" h-full pb-py-12 flex justify-start items-center  w-full my-10">
        <div className="px-12 ">
          <div className=" opacity-80 cursor-pointer flex bg-accent-pink py-4 px-16 rounded-lg text-lg font-bold hover:opacity-100">
            <span>Take a Tour</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
