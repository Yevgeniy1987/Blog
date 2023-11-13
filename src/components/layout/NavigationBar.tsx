import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="mx-auto w-1/5">
      <ul className="flex gap-3 flex-col">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
}
