import style from '../styles/header.css';
import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { SoundContextState, useSound } from '~/contexts/sound-context';
import { MouseEventHandler } from 'react';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: style }];
};

const Logo = () => {
  return (
    <div className=" space-x-1 cursor-pointer">
      <Link to={'/'}>
        <span className="text-4xl font-bold  ">Sapientia</span>
      </Link>
    </div>
  );
};

const LanguageSelector = () => {
  return (
    <div className=" cursor-pointer ml-2 sm:ml-4 ">
      <button className="p-1.5 flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-language h-6 w-6 stroke-white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h7" />
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
        </svg>
        <span>English</span>
      </button>
    </div>
  );
};

const NavigationLoginElement = () => {
  return (
    <div className=" cursor-pointer ml-2 sm:ml-4 ">
      <Link to="/login">
        <button className="px-6 py-2  flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  focus-within::bg-slate-50/5 focus-within::border-white hover:bg-slate-50/5 hover:border-white ">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-language h-6 w-6 stroke-white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M20 12h-13l3 -3m0 6l-3 -3" />
        </svg> */}
          <span>Login</span>
        </button>
      </Link>
    </div>
  );
};

type NavElementProps = {
  name: string;
  location: string;
};

const Github = () => {
  return (
    <div className="cursor-pointer flex justify-center items-center  px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink ">
      <a
        href="https://github.com/reillyjodonnell/sapientia"
        target="_blank"
        rel="noopener noreferrer"
        className="focus-within:opacity-100 opacity-80"
      >
        <svg
          width={'30px'}
          height={'30px'}
          className=" fill-primary-text "
          viewBox="0 0 128 128"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            ></path>
            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
          </g>
        </svg>
      </a>
    </div>
  );
};
// interface INavigation {
//   mute: boolean;
//   toggleMute: MouseEventHandler<HTMLSpanElement>;
// }

const Navigation = ({ mute, toggleMute }: any) => {
  return (
    <nav className="flex justify-center items-center">
      <NavigationElement name="Topics" location="/learn" />
      <NavigationElement name="Paths" location="/paths" />
      {/* <NavigationElement name="Login" location="/login" /> */}
      <Github />
      <div className=" cursor-pointer ml-2 sm:ml-4 ">
        <button className="flex border-2 border-solid border-black  active:border-stone-200 hover:border-stone-200 px-4 py-[.25rem] rounded">
          <span onClick={toggleMute} className="text-2xl cursor-pointer">
            {mute ? '🔇' : '🔈'}
          </span>
        </button>
      </div>

      {/* <LanguageSelector /> */}
      <NavigationLoginElement />
    </nav>
  );
};

const NavigationElement = ({ name, location }: NavElementProps) => {
  return (
    <Link
      className="px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink  opacity-80 hover:opacity-100 font-semibold focus-within:text-accent-pink "
      to={location}
    >
      {name}
    </Link>
  );
};

export const Header = () => {
  const values = useSound();
  const { mute, toggleMute }: any = values;
  return (
    <header className="px-6 lg:px-12 py-6 flex justify-between items-center text-white header  bg-black">
      <Logo />

      <Navigation mute={mute} toggleMute={toggleMute} />
    </header>
  );
};