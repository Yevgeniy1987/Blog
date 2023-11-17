import { POSTS } from "@/graphql/queries/POSTS_Q";
import { TAGS } from "@/graphql/queries/TAGS_Q";


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
  tags: {
    name: string;
  };
};

type Tag = {
  id: string;
  name: string;
  createdAt: string;
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

async function getTags() {
  const { data } = await getClient().query({
    query: TAGS
    
  });

  const tags = data?.tags;

  return tags;
}

export default async function Blog() {
  const posts = await getAllPosts();
  
  const tags = await getTags();
  return (
    <>
      <div>
        <h1 className="text-xl uppercase">Blog page</h1>

        <div className="mt-4 flex flex-col gap-4">
          {posts.map((post: Post) => (
            <div key={post.id} className="flex flex-col gap-4 bg-white border-solid rounded p-5">
              <p>{post.author.nickname}</p>
              <h2 className="text-5xl">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              
              {tags.map((tag: Tag) => (
                <div key={post.id} className="flex">
                  <Link href={`/tags/${tag.name}`}>{tag.name}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
