import { Header } from './header';
import { Outlet } from '@remix-run/react';

export default function index() {
  return (
    <>
      <div className=" bg-black">
        <Header />
        <span>This is the Learn section</span>
      </div>
      <div className="flex items-center content-center flex-col p-10">
        <Outlet />
      </div>
    </>
  );
}
