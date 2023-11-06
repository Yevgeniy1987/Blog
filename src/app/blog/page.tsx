import { Button } from "@/components/button";
import { POSTS } from "@/graphql/queries/POSTS_Q";
import { getClient } from "@/lib/apolloClient";

import { Metadata } from "next";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Blog",
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
      <div>
        <Button name="Relevant"></Button>

        <Button name="Latest"></Button>

        <Button name="Top"></Button>
      </div>
      <div>
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
      </div>
    </>
  );
}
