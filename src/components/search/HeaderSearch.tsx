'use client';

import { useSearchParams } from 'next/navigation';

export function HeaderSearch() {
  const searchParams = useSearchParams();

  const query = searchParams.get('q') || "";

  return (
    <form className="flex gap-1" action="/search">
      <input
        type="search"
        name="q"
        className="text-black px-2 border"
        placeholder="Search"
        defaultValue={query}
      />

      <button type="submit">&#128269;</button>
    </form>
  );
}
