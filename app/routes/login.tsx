import { useState } from 'react';
import FormattedInput from '~/components/formatted-input';
import { createUserSession, login } from '~/utils/session.server';
import type { ActionFunction, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useActionData, useSearchParams } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

function validateUsername(username: unknown) {
  if (typeof username !== 'string' || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  fieldErrors?: {
    username?: string;
    password?: string;
  };
  formError?: string;
  fields?: {
    username?: string;
    password?: string;
  };
};

const badRequest = (data: ActionData) => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const password = form.get('password')?.toString();
  const username = form.get('username')?.toString();

  const fields = { username, password };

  console.log(fields);

  if (typeof username !== 'string' || typeof password !== 'string') {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  const user = await login({ username, password });

  console.log(user);

  console.log(!user);

  // That isn't a valid account with credentials supplied
  if (!user) {
    console.log('Executing here');
    return badRequest({
      fields,
      formError: 'Username/ password is incorrect',
    });
  }

  // it is a valid user
  return createUserSession(user.id, '/');
};

export default function Login() {
  const data = useActionData<ActionData>();
  // const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  return (
    <div className="h-full flex flex-col justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center px-12 ">
        <span className="text-4xl font-bold mb-10">Login</span>
        {data?.formError && (
          <div className="w-full p-4 my-4 bg-[#ef444445] flex justify-center items-center border-2 border-solid border-red-500  ">
            <span className="text-xl text-red-500">
              {data?.formError ?? 'Invalid Email or password'}
            </span>
          </div>
        )}
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <FormattedInput
            htmlFor="username"
            label="Username"
            id="username"
            autoComplete="username"
            type="text"
            name="username"
            placeholder="Darth Sidius"
            defaultValue={data?.fields?.username}
            hasError={!!data?.fieldErrors?.username}
            errorMessage="invalid username"
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
            defaultValue={data?.fields?.password}
            hasError={!!data?.fieldErrors?.password}
            errorMessage="invalid pass"
          />
          <button className="flex mr-auto text-neutral-300 text-md hover:text-accent-pink cursor-pointer">
            Forgot password?
          </button>
          <button
            type="submit"
            onMouseOver={() => setError(true)}
            className="my-7 flex w-full justify-center items-center text-center  py-4 px-8 border-2 border-solid border-transparent bg-accent-pink rounded-lg cursor-pointer hover:border-white "
          >
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
