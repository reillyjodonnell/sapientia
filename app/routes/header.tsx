import style from '../styles/header.css';
import type { LinksFunction } from 'remix';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: style }];
};

const Logo = () => {
  return (
    <div className="w-full space-x-1 cursor-pointer">
      <span className="text-3xl">Sapientia</span>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center">
      <NavigationElement name="Test1" location="/test1" />
      <NavigationElement name="Test2" location="/test1" />
      <NavigationElement name="Test3" location="/test1" />
      <NavigationElement name="Test4" location="/test1" />
      <LanguageSelector />
    </nav>
  );
};

const LanguageSelector = () => {
  return (
    <div className=" ml-2 sm:ml-4 p-1.5 flex justify-center items-center place-items-center border border-solid border-white/60  rounded-md drop-shadow-md  hover:bg-slate-50/5 hover:border-white">
      <button className="flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-language h-6 w-6 stroke-white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
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

type NavElementProps = {
  name: string;
  location: string;
};

const NavigationElement = ({ name, location }: NavElementProps) => {
  return (
    <a
      className=" mx-2 sm:mx-4 opacity-80 hover:opacity-100 font-semibold hover:text-accent-pink"
      href={location}
    >
      {name}
    </a>
  );
};

export const Header = () => {
  return (
    <header className="px-6 lg:px-12 py-9 flex justify-between items-center text-white header">
      <Logo />
      <Navigation />
    </header>
  );
};
