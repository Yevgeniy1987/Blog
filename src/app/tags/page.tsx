import { TAGS } from "@/graphql/queries/TAGS_Q";
import { getClient } from "@/lib/apolloClient";
import classNames from "classnames";
import Link from "next/link";
import { SearchTagsBar } from "../../components/layout/tagSearch/SearchTagsBar";

type Tag = {
  id: string;
  name: string;
  createdAt: string;
};

export const revalidate = 1;

async function getAllTags() {
  const { data } = await getClient().query({ query: TAGS });

  const tags = data?.tags as Tag[];

  return tags;
}

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="flex-1 flex-wrap">
      <div className="flex justify-between">
        <h1 className="text-xl uppercase">Tags</h1>

        <div className="bg-white border border-solid border-black">
          <SearchTagsBar />
        </div>
      </div>

      <ol className="mt-4 flex flex-wrap gap-4">
        {tags.map((tag: any) => (
          <li key={tag.name} className="bg-white post-card border rounded p-3">
            <h2>
              <Link href={`/tags/${tag.name}`} className="hover:underline">
                {tag.name}
              </Link>
            </h2>
          </li>
        ))}
      </ol>
    </div>
  );
}
