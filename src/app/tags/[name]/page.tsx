import { TAG } from '@/graphql/queries/TAG_Q';
import { getClient } from '@/lib/apolloClient';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    name: string;
  };
};

export const revalidate = 1;

async function getTag(name: String) {
  const { data } = await getClient().query({
    query: TAG,
    variables: { tagName: name }
  });

  const tag = data?.tag;

  return tag;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tagName = params.name;

  const tag = await getTag(tagName);

  return {
    title: tag?.name
  };
}

export default async function Tag({ params }: Props) {
  const tagName = params.name;

  const tag = await getTag(tagName);

  if (!tag) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 bg-white border-solid rounded p-5">
      <h1 className="text-xl uppercase">{tag.name}</h1>
      <p>{tag.createdAt}</p>
      <p>{tag.body}</p>
    </div>
  );
}
