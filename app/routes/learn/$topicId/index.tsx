import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Link } from 'react-router-dom';
import NewCard from '~/components/new-card';
import TopicCard from '~/components/topic-card';
import { useSound } from '~/contexts/sound-context';
import { db } from '~/utils/db.server';

type bothData = {
  // of type LoaderData
  data: LoaderData;
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

export default function Index() {
  const { data } = useLoaderData<bothData>();

  const { mute }: any = useSound();

  const { articlePosts } = data;
  return (
    <>
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
                <NewCard
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
