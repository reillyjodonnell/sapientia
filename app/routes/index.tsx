import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from 'remix';
import { Header, links as headerLinks } from './header';
import Motd from './motd';
import { MainContent, links as mainContentLinks } from './main-content';

export const links: LinksFunction = () => [
  ...headerLinks(),
  ...mainContentLinks(),
  { rel: 'stylesheet', href: stylesUrl },
];
export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
      }}
    >
      <Header />

      <MainContent />
    </div>
  );
}
