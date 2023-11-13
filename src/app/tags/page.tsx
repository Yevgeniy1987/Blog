import { TAGS } from "@/graphql/queries/TAGS_Q";
import { getClient } from "@/lib/apolloClient";
import classNames from "classnames";
import Link from "next/link";

type Tag = {
  id: string;
  name: string;
  createdAt: string;
};

async function getAllTags() {
  const { data } = await getClient().query({ query: TAGS });

  const tags = data?.tags as Tag[];

  return tags;
}

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-xl uppercase">Tags</h1>
        <div className="flex">
          <button
            className={classNames(
              "px-6 py-4 border text-black hover:hover:bg-gray-400 border-solid rounded"
            )}
          >
            Following tags
          </button>
          <button
            className={classNames(
              "px-6 py-4 border text-black hover:hover:bg-gray-400 border-solid rounded"
            )}
          >
            Hidden tags
          </button>
          <div className="bg-white border border-solid border-black">
            <input
              className="px-6 py-4"
              type="search"
              placeholder="Search for tag"
            />
            <button className="hover:bg-gray-100 px-6 py-4" type="submit">
              &#128269;
            </button>
          </div>
        </div>
      </div>

      <ol className="mt-4 flex flex-wrap">
        {tags.map((tag: any) => (
          <li
            key={tag.name}
            className="bg-white w-1/4  border rounded p-3"
          >
            <h2>
              <Link href={`/tags/${tag.name}`} className="hover:underline">
                {tag.name}
              </Link>
            </h2>
            <div className="flex gap-2">
              <button
                className={classNames(
                  "px-6 py-4 mt-3 border text-white border border-solid rounded bg-blue-400 hover:text-blue hover:bg-blue-600 border-solid rounded"
                )}
              >
                Follow
              </button>
              <button
                className={classNames(
                  "px-6 py-4 mt-3 border text-black hover:text-blue hover:bg-blue-100 border-solid rounded"
                )}
              >
                Hide
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
