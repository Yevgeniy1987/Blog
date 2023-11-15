import { SEARCH_POSTS } from '@/graphql/queries/SEARCH_POSTS_Q';
import { getClient } from '@/lib/apolloClient';

import { Metadata } from 'next';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  author: {
    id: string;
    nickname: string;
  };
};

type SearchParams = { [key: string]: string };

export const metadata: Metadata = {
  title: 'Search'
};

export const revalidate = 1;

async function searchPosts(query: string) {
  const { data } = await getClient().query({
    query: SEARCH_POSTS,
    variables: { q: query }
  });

  const posts = data?.posts as Post[];

  return posts;
}

export default async function Blog({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const { q } = searchParams;

  const posts = await searchPosts(q);

  return (
    <>
      <div>
        <h1 className="text-xl uppercase">Search page</h1>

        <ol className="mt-4 list-decimal">
          {posts.map((post: Post) => (
            <li key={post.id}>
              <h2>
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
