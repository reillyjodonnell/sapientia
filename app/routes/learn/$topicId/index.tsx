import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Link } from 'react-router-dom';
import NewCard from '~/components/new-card';
import TopicCard from '~/components/topic-card';
import { useSound } from '~/contexts/sound-context';
import { capitalizeFirstLetter } from '~/helper/helper';
import { db } from '~/utils/db.server';

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

export default function Index() {
  const { data, name } = useLoaderData<bothData>();

  const formattedTopicName = capitalizeFirstLetter(name);

  const { mute }: any = useSound();

  const { articlePosts } = data;
  return (
    <>
      <div className="flex flex-col w-[600px]">
        {articlePosts.length >= 1 &&
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
            })}

        {articlePosts.length ? (
          <Link className="w-full flex" to={{ pathname: './new' }}>
            <div className="flex content-center items-center text-center bg-[#ffffff0a] rounded-lg  p-8 border-[1px] border-solid border-stone-400 w-full flex-col text-xl mt-8">
              <span className="text-4xl px-6 my-6 font-bold">
                Love an article that you don't see for {formattedTopicName}?
              </span>
              <span className="text-3xl my-4 text-gray-300 font-semibold">
                Add it below!
              </span>
              <button className="my-6 px-6 py-2 rounded-lg border-4   border-accent-pink bg-accent-pink-bg transition hover:brightness-75">
                Add Article
              </button>
            </div>
          </Link>
        ) : (
          <Link className="w-full flex" to={{ pathname: './new' }}>
            <div className="flex cursor-default content-center items-center text-center bg-[#ffffff0a] rounded-lg  p-8 border-[1px] border-solid border-stone-400 w-full flex-col text-xl mt-8">
              <span className="text-4xl px-6 my-6">
                😔 No articles for {formattedTopicName}, yet!
              </span>
              <span className="text-3xl my-4">Add one below!</span>
              <button className="my-6 px-6 py-2 rounded-lg border-4   border-accent-pink bg-accent-pink-bg transition hover:brightness-75">
                Add Article
              </button>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
