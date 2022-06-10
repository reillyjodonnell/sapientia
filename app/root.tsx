import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { json, LinksFunction, LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import styles from './styles/tailwind.css';
import SoundProvider from './contexts/sound-context';
import Motd from './components/motd';
import { Header } from './components/header';
import { getUser } from './utils/session.server';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Sapientia',
  viewport: 'width=device-width,initial-scale=1',
});

type User = {
  id: string;
  username: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  console.log(user);
  return json(user);
};

export default function App() {
  const data = useLoaderData<User>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            lineHeight: '1.4',
          }}
        >
          <SoundProvider>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Motd />
            </div>
            <Header user={data} />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </SoundProvider>
        </div>
      </body>
    </html>
  );
}
