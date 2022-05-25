import { useState } from 'react';
import FormattedInput from '~/components/formatted-input';
import HighlightableTextInput from '~/components/highlightable-text-input';
import { login } from '~/utils/session.server';
import { Link, useSearchParams } from '@remix-run/react';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get('loginType');
  const username = form.get('username');
  const password = form.get('password');
  const redirectTo = validateUrl(form.get('redirectTo') || '/jokes');
  if (
    typeof loginType !== 'string' ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string'
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case 'login': {
      // login to get the user
      // if there's no user, return the fields and a formError
      // if there is a user, create their session and redirect to /jokes
      return badRequest({
        fields,
        formError: 'Not implemented',
      });
    }
    case 'register': {
      const userExists = await db.user.findFirst({
        where: { username },
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: `User with username ${username} already exists`,
        });
      }
      // create the user
      // create their session and redirect to /jokes
      return badRequest({
        fields,
        formError: 'Not implemented',
      });
    }
    default: {
      return badRequest({
        fields,
        formError: `Login type invalid`,
      });
    }
  }
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();


  function test(e: any) {
    console.log(e.target.value);
  }
  return (
    <div className="h-full flex flex-col justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center px-12 ">
        <span className="text-4xl font-bold mb-10">Login</span>
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <FormattedInput
            htmlFor="email"
            label="Email"
            id="email"
            autoComplete="email"
            type="email"
            name="email"
            placeholder="Vader@deathstar.sit"
            hasError={error}
            errorMessage="invalid email"
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
            hasError={error}
            errorMessage="invalid pass"
            onChange={test}
          />
          <button className="flex mr-auto text-neutral-300 text-md hover:text-accent-pink cursor-pointer">
            Forgot password?
          </button>
          <button
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
