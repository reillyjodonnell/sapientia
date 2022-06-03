import { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Courses() {
  return <span>This is the Paths section</span>;
}
