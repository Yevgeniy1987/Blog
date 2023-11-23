import { PostAuthorDeets } from "@/components/posts/PostAuthorDeets";
import { TAG } from "@/graphql/queries/TAG_Q";
import { getClient } from "@/lib/apolloClient";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    name: string;
  };
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
  comments: {
    id: string;
    body: string;
  };
};

export const revalidate = 1;

async function getTag(name: String) {
  const { data } = await getClient().query({
    query: TAG,
    variables: { tagName: name },
  });

  const tag = data?.tag;

  return tag;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tagName = params.name;

  const tag = await getTag(tagName);

  return {
    title: tag?.name,
  };
}

export default async function Tag({ params }: Props) {
  const tagName = params.name;

  const tag = await getTag(tagName);

  if (!tag) {
    notFound();
  }
  // const readingTime = Math.ceil(tag.posts.body.split(" ").length / 170)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-white border-solid border border-gray-200 rounded p-5">
        <h1 className="text-xl uppercase font-bold">#{tag.name}</h1>
        <p>{tag.createdAt.toLocaleString()}</p>
      </div>

      {tag.posts.map((post: Post) => (
        
        <div className="flex h-full flex-col gap-4 bg-white border border-gray-200 border-solid rounded ">
          <div
            key={post?.id}
            className="flex flex-col gap-4 bg-white p-5"
          >
            <PostAuthorDeets post={post} />

            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <div className="flex gap-3">
              {tag.posts.map((post: Post) => (
                <Link key={post?.id} href={`/tags/${tag.name}`}>
                  #{tag.name}
                </Link>
              ))}
            </div>
           
            {/* <p>
              {readingTime} {readingTime > 1 ? "mins" : "min"}
            </p> */}
          </div>
         
                    
        </div>
      ))}
    </div>
  );
}
