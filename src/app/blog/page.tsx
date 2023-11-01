import { POSTS } from '@/graphql/queries/POSTS_Q';
import { apolloClient } from '@/lib/apolloClient';
import { Metadata } from 'next';
import Link from 'next/link';

async function getAllPosts() {
  const { data } = await apolloClient.query({ query: POSTS });

  const posts = data.posts;

  return posts;
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="text-xl uppercase">Blog page</h1>

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
    </>
  );
}
