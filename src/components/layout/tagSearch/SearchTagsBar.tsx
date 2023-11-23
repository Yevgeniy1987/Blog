"use client";
import { useSearchParams } from "next/navigation";

export function SearchTagsBar() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  
  return (
    <form action="/tagsSearch">
      <input
        type="search"
        name="q"
        className="text-black px-2 border-0"
        placeholder="Search"
        defaultValue={query}
      />
      <button className="hover:bg-gray-100 px-4 py-2" type="submit">
        &#128269;
      </button>
    </form>
  );
}
