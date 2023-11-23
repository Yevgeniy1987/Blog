'use client';

import { useSearchParams } from 'next/navigation';

export function SearchBar() {
  const searchParams = useSearchParams();

  const query = searchParams.get('q') || "";

  return (
    <form className="flex gap-1 p-2 border" action="/search">
      <input
        type="search"
        name="q"
        className="text-black px-2"
        placeholder="Search"
        defaultValue={query}
      />
      <button type="submit">&#128269;</button>
    </form>
  );
}
