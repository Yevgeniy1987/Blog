import { Timer } from '@/components/Timer';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  const response = await fetch(`http://localhost:3333/posts/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postId = params.id;

  const post = await getPost(postId);

  return {
    title: post.title
  };
}

export default async function Post({ params }: Props) {
  const postId = params.id;

  const post = await getPost(postId);

  return (
    <div className="flex flex-col gap-4">
      <Timer />
      <h1 className="text-xl uppercase">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
