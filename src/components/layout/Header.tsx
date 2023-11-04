import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 bg-gray-400">
        <nav className="container mx-auto ">
            <ul className="flex gap-3">
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
    </header>
  )
}
