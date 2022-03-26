import style from '../styles/main-content.css';
import type { LinksFunction } from 'remix';
import Motd from './motd';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: style }];
};
export const MainContent = () => {
  return (
    <div className="main-content flex flex-col ">
      <Motd />
      <div className="  h-full pt-py-12 flex justify-start items-center  w-full my-6 ">
        <div className="w-2/3 px-12">
          <h1
            style={{
              textShadow:
                ' 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);',
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
