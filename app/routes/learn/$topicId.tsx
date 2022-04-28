import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ params }) => {
  const topic = { name: params.topicId };
  return json(topic);
};

export default function JokeRoute() {
  const topic = useLoaderData();
  const name = topic.name;

  return (
    <>
      <>
        <span className="text-3xl">Here's your topic:</span>
        <span className="font-bold text-4xl">{name}</span>
      </>
      <span>Trending Articles</span>
    </>
  );
}
