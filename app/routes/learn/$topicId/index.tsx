import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Link } from 'react-router-dom';
import NewCard from '~/components/new-card';
import TopicCard from '~/components/topic-card';
import { useSound } from '~/contexts/sound-context';
import { capitalizeFirstLetter } from '~/helper/helper';
import { db } from '~/utils/db.server';
import { getUserId, requireUserId } from '~/utils/session.server';

type bothData = {
  // of type LoaderData
  data: LoaderData;
  name: string;
  likedPostIds: Array<String>;
};

type LoaderData = {
  articlePosts: Array<{
    id: string;
    authorOfPost: string;
    authorTwitter?: string | null;
    title: string;
    url: string;
    points?: number | null;
    topicName: string;
  }>;
};

export const action: ActionFunction = async ({ request }) => {
  // Todo make sure the user is logged in and pass their userId below
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const { id, _action } = Object.fromEntries(formData);

  const fields = {
    postId: id.toString(),
    userId: userId.toString(),
    // userId: 'f736fee2-61f2-497e-abc9-05ceee87f78c',
  };

  const hasLiked = await db.like.findFirst({
    where: {
      userId: fields.userId,
      postId: fields.postId,
    },
  });

  const hasDisliked = await db.dislike.findFirst({
    where: {
      userId: fields.userId,
      postId: fields.postId,
    },
  });

  if (_action === 'downvote') {
    // make sure they haven't already disliked
    if (!hasDisliked) {
      console.log({ ...fields });
      await db.dislike.create({
        data: { ...fields },
      });
    }
    // make sure it's not liked if(...)
  }
  if (_action === 'upvote') {
    // make sure they haven't already liked
    if (!hasLiked) {
      console.log({ ...fields });

      await db.like.create({
        data: { ...fields },
      });
    }

    // if(hasLiked){
    //   await db.like.delete({
    //     where: {
    //       userId: fields.userId,
    //       postId: fields.postId,
    //     },
    //   });
    // make sure it's not disliked if(....)
  }
  return null;
};

export const loader: LoaderFunction = async ({ params }) => {
  const name = params.topicId;

  const data: LoaderData = {
    // If there's a user check if they've liked/ disliked any of the posts
    articlePosts: await db.post.findMany({
      where: {
        topicName: name,
      },
    }),
  };

  const postIds = data.articlePosts.map(({ id, ...rest }) => {
    return id;
  });

  type LikedPosts = {
    id: number;
    userId: string;
    postId: string;
  };

  type LikePostsArray = {
    likedPosts: Array<LikedPosts> | null;
  };

  const likedPostsArray: LikePostsArray = {
    likedPosts: await db.like.findMany({
      where: {
        postId: {
          in: postIds,
        },
      },
    }),
  };

  // We only care about the postId
  const likedPostIds = likedPostsArray.likedPosts?.map(
    ({ postId, ...rest }: LikedPosts) => {
      return postId;
    }
  );

  type DislikedPosts = {
    id: number;
    userId: string;
    postId: string;
  };

  type DislikePostsArray = {
    dislikedPosts: Array<DislikedPosts> | null;
  };

  const dislikedPostsArray: DislikePostsArray = {
    dislikedPosts: await db.dislike.findMany({
      where: {
        postId: {
          in: postIds,
        },
      },
    }),
  };

  // We only care about the postId
  const dislikedPostIds = dislikedPostsArray.dislikedPosts?.map(
    ({ postId, ...rest }: DislikedPosts) => {
      return postId;
    }
  );

  return json({ dislikedPostIds, likedPostIds, data, name });
};

export default function Index() {
  const { likedPostIds, data, name } = useLoaderData<bothData>();

  const formattedTopicName = capitalizeFirstLetter(name);

  const { mute }: any = useSound();

  function getPostUrl(url: string) {}

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
                  topic={name}
                  getPostUrl={getPostUrl}
                  mute={mute}
                  author={item.authorOfPost}
                  title={item.title}
                  link={item.url}
                  upvotes={item.points ?? 0}
                  id={item.id}
                  liked={likedPostIds.includes(item.id)}
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
