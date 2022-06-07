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
  await Promise.all(
    getData().map((item) => {
      const data = { posterId: admin.id, ...item };
      return db.post.create({
        data,
      });
    })
  );
}

seed();

function getData() {
  return [
    {
      title: 'React Fundamentals: Props vs State',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/props-vs-state',
      points: 69,
      authorTwitter: 'kentcdodds',
      topic: 'react',
    },
    {
      title: 'When to useMemo and useCallback',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/usememo-and-usecallback',
      points: 426,
      authorTwitter: 'kentcdodds',
      topic: 'react',
    },
    {
      title: 'How to React ⚛️',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/how-to-react',
      points: 780,
      authorTwitter: 'kentcdodds',
      topic: 'react',
    },
    {
      title: 'How to use React Context effectively',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/how-to-use-react-context-effectively',
      points: 820,
      authorTwitter: 'kentcdodds',
      topic: 'react',
    },
    {
      title: 'A Complete Guide To useEffect',
      authorOfPost: 'Dan Abramov',
      url: 'https://overreacted.io/a-complete-guide-to-useeffect/',
      points: 70382,
      authorTwitter: 'dan_abramov',
      topic: 'react',
    },
    {
      title: 'React Fundamentals: Props vs State',
      authorOfPost: 'Kent C. Dodds',
      url: 'https://kentcdodds.com/blog/props-vs-state',
      points: 69949,
      authorTwitter: 'kentcdodds',
      topic: 'react',
    },
    {
      title: 'Heres an uneccessarily long title wihosanoinasd oinsdfoinsdf',
      authorOfPost: 'anonymous',
      url: '',
      points: 69420,
      topic: '',
    },
    {
      title: 'Exactly 1000 points',
      authorOfPost: 'anonymous',
      url: '',
      points: 1000,
      topic: '',
    },
  ];
}
