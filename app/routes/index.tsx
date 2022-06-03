import stylesUrl from '~/styles/index.css';
import type { LinksFunction } from '@remix-run/node';
import MainContent from '~/components/main-content';

export const links: LinksFunction = () => [
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
      <MainContent />
      {/* <SoundProvider>
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
        // 
      </SoundProvider> */}
    </div>
  );
}
