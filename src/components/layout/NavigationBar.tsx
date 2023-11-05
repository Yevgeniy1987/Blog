import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="container mx-auto w-1/4 bg-white">
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
      </ul>
    </nav>
  );
}
