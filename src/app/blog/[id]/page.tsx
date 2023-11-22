import { POST } from "@/graphql/queries/POST_Q";
import { getClient } from "@/lib/apolloClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    commentId : string;
  };
};
type Comment = {
  id: string;
  body: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
  };
  post: {
    id: string;
    title: string;
    body: string;
  };
}

// type Post = {
//   id: string;
//   title: string;
//   body: string;
//   createdAt: string;
//   author: {
//     id: string;
//     nickname: string;
//   };
//   comments: {
//     id: string;
//     body: string;
//   };
//   tags: {
//     name: string;
//   };
// };
// type Tag = {
//   id: string;
//   name: string;
//   createdAt: string;
// };

export const revalidate = 1;

async function getPost(id: string) {
  const { data } = await getClient().query({
    query: POST,
    variables: { postId: id },
  });

  const post = data?.post;

  return post;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postId = params.id;

  const post = await getPost(postId);

  return {
    title: post?.title,
  };
}

export default async function Post({ params }: Props) {
  const postId = params.id;

  const post = await getPost(postId);
  if (!post) {
    notFound();
  }


  
  return (
    <div className="flex w-1/2 h-full flex-col gap-4 bg-white border-solid rounded p-5">
      <p>{post.author?.nickname}</p>
      <h1 className="text-xl uppercase">{post.title}</h1>
      <p>{post.body}</p>

      {post.comments.map((comment: Comment) => (
        <div
          key={comment.id}
          className="flex flex-col gap-4 bg-white border-solid rounded p-5"
        >
          <p>{comment?.author?.name || 'Anonymous'}</p>
          <p>{comment?.body}</p>
          {/* <p>{post.tags?.name}</p> */}
        </div>
      ))}
      {/* render arrays via .map() */}
      {/* <p>{post.comments}</p>
      <p>{post.tags}</p> */}
    </div>
  );
}
