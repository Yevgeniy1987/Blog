import { PostAuthorDeets } from '@/components/posts/PostAuthorDeets';
import { POSTS } from '@/graphql/queries/POSTS_Q';

import { getClient } from '@/lib/apolloClient';

import { Metadata } from 'next';
import Link from 'next/link';

type Tag = {
  name: string;
};

type Post = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  author: {
    id: string;
    nickname: string;
  };
  tags: Tag[];
};

export const metadata: Metadata = {
  title: 'Blog'
};

export const revalidate = 1;

async function getAllPosts() {
  const { data } = await getClient().query({ query: POSTS });

  const posts = data?.posts as Post[];

  return posts;
}

export default async function Blog() {
  const posts = await getAllPosts();

  

  return (
    <>
      <div className="w-1/2">
        <h1 className="text-xl uppercase">Blog page</h1>

        <div className="mt-4 flex flex-col gap-4">
          {posts.map((post: Post) => {
            const readingTime = Math.ceil(post.body.split(' ').length / 170);
            
            return <div
            key={post.id}
            className="flex flex-col gap-4 bg-white rounded p-5 border border-gray-200">
            <PostAuthorDeets post={post} />

            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <div className="flex gap-3">
              {post.tags.map((tag: Tag) => (
                <Link key={tag.name} href={`/tags/${tag.name}`}>#{tag.name}</Link>
              ))}
            </div>

            <p>{readingTime} {readingTime > 1 ? 'mins' : 'min'}</p>
          </div>
          })}
        </div>
      </div>
    </>
  );
}
