import { TAGS } from "@/graphql/queries/TAGS_Q";
import { getClient } from "@/lib/apolloClient";
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
    <div>
      <h1 className="text-xl uppercase">Countries</h1>

      <ol className="mt-4 list-decimal">
        {tags.map((tag: any) => ( 
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
  );
}
