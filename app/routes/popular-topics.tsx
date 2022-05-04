import { Link } from 'react-router-dom';

const data = [
  { name: 'Svelte', id: 0 },
  { name: 'Tailwind', id: 1 },
  { name: 'Rust', id: 2 },
  { name: 'Python', id: 3 },
  { name: 'useEffect', id: 4 },
  { name: 'Pagination', id: 5 },
];

export default function PopularTopics() {
  return (
    <div className="flex flex-col mr-10 w-80">
      <span className="font-bold size text-2xl">Popular Topics</span>
      <>
        {data.map((item) => {
          const lowerCaseTitle = item.name.toLowerCase();
          return (
            <div
              key={item.id}
              className="flex justify-start items-center my-0.5"
            >
              <Link to={`./${lowerCaseTitle}`}>
                <div className="w-full flex cursor-pointer px-5 py-2 rounded-xl hover:bg-stone-900 hover:text-accent-pink">
                  <span className="cursor-pointer text-lg ">{item.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </>
    </div>
  );
}
