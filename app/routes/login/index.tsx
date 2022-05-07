import { Link } from '@remix-run/react';
import { useState } from 'react';
import HighlightableTextInput from '~/components/highlightable-text-input';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-full flex flex-col justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center px-12 ">
        <span className="text-4xl font-bold mb-10">Login</span>
        <form>
          <div className="flex w-80 flex-col">
            <label
              htmlFor="email"
              className="flex justify-start items-center w-full text-xl mb-1"
            >
              Email
            </label>
            <div>
              <input
                id="email"
                autoComplete="email"
                type="email"
                name="email"
                placeholder="Vader@deathstar.sit"
                className="flex w-full px-2 mb-6 py-4 border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl "
              />
            </div>
          </div>
          <div className="flex w-80 flex-col">
            <label
              htmlFor="password"
              className="flex justify-start items-center w-full text-xl mb-1"
            >
              Password
            </label>
            <div className="flex w-full border-2 border-solid border-gray-600 focus-within:border-white  bg-black rounded-lg hover:shadow-2xl relative">
              <input
                id="current-password"
                autoComplete="current-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="HanShotFirst"
                className="flex w-full px-2 py-4  bg-black rounded-lg hover:shadow-2xl relative  "
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center "
                aria-pressed={showPassword}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? '🙉' : '🙈'}
              </button>
            </div>
          </div>
          <button className="flex mr-auto text-neutral-300 my-1 hover:text-accent-pink cursor-pointer">
            Forgot password?
          </button>
          <button className="mt-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white ">
            <span className="font-bold">Login</span>
          </button>
        </form>

        <span className="mt-4 flex w-full justify-start">
          Don't have an account?
          <Link to="/signup">
            <span className="ml-1 text-accent-pink cursor-pointer">
              Sign Up
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
}
