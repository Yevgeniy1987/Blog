import { Timer } from '@/components/Timer';
import { POST } from '@/graphql/queries/POST_Q';
import { getClient } from '@/lib/apolloClient';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  const { data } = await getClient().query({
    query: POST,
    variables: { postId: id }
  });

  const post = data?.post;

  return post;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postId = params.id;

  const post = await getPost(postId);

  return {
    title: post?.title
  };
}

export default async function Post({ params }: Props) {
  const postId = params.id;

  const post = await getPost(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <Timer />
      <h1 className="text-xl uppercase">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
