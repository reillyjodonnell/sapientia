import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import TopicCard, { baseArticle } from '~/components/topic-card';
import { db } from '~/utils/db.server';
import { Link } from '@remix-run/react';
import { useSound } from '~/contexts/sound-context';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

type bothData = {
  // of type LoaderData
  data: LoaderData;
  name: string;
};

type LoaderData = {
  articlePosts: Array<{
    id: string;
    authorOfPost: string;
    authorTwitter?: string | null;
    title: string;
    url: string;
    points?: number | null;
    topic: string;
  }>;
};
export const loader: LoaderFunction = async ({ params }) => {
  const name = params.topicId;

  const data: LoaderData = {
    articlePosts: await db.post.findMany({
      where: {
        topic: name,
      },
    }),
  };
  return json({ data, name });
};

export default function Learn() {
  const { data, name } = useLoaderData<bothData>();

  const { mute }: any = useSound();

  const { articlePosts } = data;

  return (
    <>
      <div className="flex justify-center items-center">
        <span
          className="font-bold text-6xl mb-3 capitalize"
          style={{
            textShadow:
              'rgba(192, 219, 255, 0.3) 0px 0px 80px, rgba(65, 120, 255, 0.15) 0px 0px 32px',
          }}
        >
          {name}
        </span>
        {/* TODO: MOVE THE AUDIO TOGGLE TO THE NAV */}
        {/* <span onClick={toggleAudio} className="ml-12 text-2xl cursor-pointer">
          {mute ? '🔇' : '🔈'}
        </span> */}
      </div>
      <Link to={{ pathname: './new' }}>
        <div className="flex flex-col text-xl mt-8">
          <button className=" px-10 py-4 rounded-lg border-4 border-white hover:border-accent-pink hover:bg-accent-pink-bg active:border-accent-pink active:bg-accent-pink-bg ">
            + Add Article
          </button>
        </div>
      </Link>

      <div className="flex flex-col w-[600px] ">
        {articlePosts.length ? (
          articlePosts
            .sort((a, b) => (a.points! < b.points! ? 1 : -1))
            .map((item, index) => {
              const rank = index + 1;

              return (
                <TopicCard
                  mute={mute}
                  author={item.authorOfPost}
                  title={item.title}
                  link={item.url}
                  upvotes={item.points ?? 0}
                  key={item.id}
                  rank={rank}
                  twitterHandle={item.authorTwitter ?? ''}
                />
              );
            })
        ) : (
          <div className="flex flex-col justify-center items-center my-20 font-extrabold text-xl">
            <span>😔 No articles for this topic, yet!</span>
            <span className="mt-4">Add one above! 👆</span>
          </div>
        )}
      </div>
    </>
  );
}
