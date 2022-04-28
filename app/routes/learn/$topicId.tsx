import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Header } from '../header';

export const loader: LoaderFunction = async ({ params }) => {
  const topic = { name: params.topicId };
  return json(topic);
};

export default function JokeRoute() {
  const topic = useLoaderData();
  const name = topic.name;

  return (
    <>
      <Header />
      <div>
        <p>Here's your topic:</p>
        <p>{name}</p>
      </div>
    </>
  );
}
