import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import styles from './styles/tailwind.css';
import SoundProvider from './contexts/sound-context';
import Motd from './components/motd';
import { Header } from './components/header';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Sapientia',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
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
            <Header />
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
