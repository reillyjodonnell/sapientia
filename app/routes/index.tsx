import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from 'remix';
import { Header, links as headerLinks } from './header';
import Motd from './motd';

export const links: LinksFunction = () => [
  ...headerLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];
export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <Header />
      <Motd />
    </div>
  );
}
