import { useSession } from "next-auth/react";
import Image from "next/image";

function getFirstTwoWords(fullName: string): string {
  const words = fullName.split(" ");
  const firstTwoWords = words.slice(0, 2);
  return firstTwoWords.join(" ");
}

function generateUsername(fullName: string): string {
  const words = fullName.split(" ");
  const firstTwoWords = words.slice(0, 2);
  const username = `@${firstTwoWords.join("").toLowerCase()}`;
  return username;
}

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="min-h-[15rem] bg-yellow-300 flex flex-col px-8">
      <div className="py-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search for items"
          />
        </div>
      </div>
      <div className="flex mt-12 gap-4 items-center">
        {session && (
          <>
            <div>
              <Image
                className="rounded-2xl"
                src={session.user.image}
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </div>
            <div>
              <h3 className="font-bold">
                {getFirstTwoWords(session.user.name)}
              </h3>
              <p className="text-black text-opacity-50">
                {generateUsername(session.user.name)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniProfile;
