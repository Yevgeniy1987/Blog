import { SEARCH_TAGS } from "@/graphql/queries/SEARCH_TAGS_Q";

import { getClient } from "@/lib/apolloClient";

import { Metadata } from "next";
import Link from "next/link";

type Tag = {
  id: string;
  name: string;
  createdAt: string;
};

type SearchParams = { [key: string]: string };

export const revalidate = 1;

export const metadata: Metadata = {
  title: "Search",
};

async function searchTags(query: string) {
  const { data } = await getClient().query({
    query: SEARCH_TAGS,
    variables: { q: query },
  });

  const tags = data?.tags as Tag[];

  return tags;
}

export default async function Tag({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q } = searchParams;

  const tags = await searchTags(q);

  return (
    <>
      <div>
        <h1 className="text-xl uppercase">Search page</h1>

        <ol className="mt-4 list-decimal">
          {tags.map((tag: Tag) => (
            <li key={tag.name}>
              <h2>
                <Link href={`/tags/${tag.name}`} className="hover:underline">
                  {tag.name}
                </Link>
              </h2>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
