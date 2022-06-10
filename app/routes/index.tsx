import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from '@remix-run/node';
import MainContent from '~/components/main-content';
import { useLayoutEffect, useEffect } from 'react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl },
];
export default function Index() {
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  useIsomorphicLayoutEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(
    to right top,
    #1a1a1a,
    #19191a,
    #19191a,
    #181819,
    #171819,
    #191e24,
    #1b2430,
    #1e2a3c,
    #2d3759,
    #464173,
    #6a498a,
    #934d9a
  )`;
  }, []);
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
      }}
    >
      <MainContent />
    </div>
  );
}
