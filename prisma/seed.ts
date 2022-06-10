import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  const admin = await db.user.create({
    data: {
      username: 'reilly',
      // bcyrpt hash for RoryIsAwesome
      passwordHash:
        '$2a$12$3liRz2A2BB.IuV.9rhw8L.x41PjWs3.sigCHUQNCOBeJjcYoHHryO',
    },
  });

  // Create topic and create a topic for each item in array
  const topic = await Promise.all(
    getTopicData().map((topics) => {
      const data = { name: topics.name };

      return db.topic.create({
        data,
      });
    })
  );

  console.log(topic);

  const reactObject = topic.filter((item) => {
    return item.name === 'react';
  });

  const react = reactObject[0]?.name;

  await Promise.all(
    getPostData().map((item) => {
      const data = { ...item, topicName: react, posterId: admin.id };
      return db.post.create({
        data,
      });
    })
  );
}

seed();

function getTopicData() {
  return [
    {
      name: 'react',
    },
    {
      name: 'remix',
    },
    {
      name: 'tailwind',
    },
    {
      name: 'javascript',
    },
    {
      name: 'css',
    },
    {
      name: 'node',
    },
    {
      name: 'rust',
    },
    {
      name: 'svelte',
    },
    {
      name: 'python',
    },
  ];
}

function getPostData() {
  return [
    {
      title: 'React Fundamentals: Props vs State',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/props-vs-state',
      points: 69,
      authorTwitter: 'kentcdodds',
    },
    {
      title: 'When to useMemo and useCallback',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/usememo-and-usecallback',
      points: 426,
      authorTwitter: 'kentcdodds',
    },
    {
      title: 'How to React ⚛️',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/how-to-react',
      points: 780,
      authorTwitter: 'kentcdodds',
    },
    {
      title: 'How to use React Context effectively',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/how-to-use-react-context-effectively',
      points: 820,
      authorTwitter: 'kentcdodds',
    },
    {
      title: 'A Complete Guide To useEffect',
      authorOfPost: 'Dan Abramov',
      url: 'https://overreacted.io/a-complete-guide-to-useeffect/',
      points: 70382,
      authorTwitter: 'dan_abramov',
    },
    {
      title: 'React Fundamentals: Props vs State',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/props-vs-state',
      points: 69949,
      authorTwitter: 'kentcdodds',
    },
    {
      title: 'Heres an uneccessarily long title wihosanoinasd oinsdfoinsdf',
      authorOfPost: 'anonymous',
      url: '',
      points: 69420,
    },
    {
      title: 'Exactly 1000 points',
      authorOfPost: 'anonymous',
      url: '',
      points: 1000,
    },
  ];
}
