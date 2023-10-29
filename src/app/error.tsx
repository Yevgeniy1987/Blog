'use client';

export default function RootError({ error }: { error: Error }) {
  console.log('RootError', error);

  return <h1 className="text-xl uppercase text-red-700">error</h1>;
}
