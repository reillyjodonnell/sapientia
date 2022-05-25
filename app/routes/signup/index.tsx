import { Link } from '@remix-run/react';
import FormattedInput from '~/components/formatted-input';

export default function Login() {
  return (
    <div className="h-full flex flex-col justify-center items-center  m-10">
      <div className="flex flex-col justify-center items-center px-12 ">
        <span className="text-4xl font-bold mb-6">Sign Up</span>
        <form>
          <FormattedInput
            htmlFor="name"
            label="Name"
            id="name"
            autoComplete="name"
            name="name"
            type="text"
            placeholder="Ana ... Darth Vader"
          />
          <FormattedInput
            htmlFor="email"
            label="Email"
            id="email"
            autoComplete="email"
            name="email"
            type="email"
            placeholder="Vader@deathstar.sit"
          />
          <FormattedInput
            htmlFor="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            name="password"
            type="password"
            placeholder="HanShotFirst"
            toggleShowHide={true}
          />
          <div className="flex justify-start items-center">
            <input
              className="h-6 w-6 accent-accent-pink"
              name="agree"
              type="checkbox"
            ></input>
            <label className="ml-4 text-lg" htmlFor="agree">
              I agree to the{' '}
              <span className="cursor-pointer text-accent-pink">Terms</span>
            </label>
          </div>

          <button className="mt-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white ">
            <span className="font-bold ">Create Account</span>
          </button>
        </form>

        <span className="mt-8 w-full flex justify-start">
          Already have an account?
          <Link to="/login">
            <span className="ml-1 text-accent-pink cursor-pointer">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
