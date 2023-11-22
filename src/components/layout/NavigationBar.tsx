'use client';
import Link from 'next/link';

import { HomeIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { HashtagIcon } from '@heroicons/react/24/outline';

export default function NavigationBar() {
  return (
    <nav className="w-1/5">
      <ul className="flex gap-3 flex-col">
        <li>
          <Link href="/" className="flex gap-2 items-center">
            <HomeIcon className="w-6 h-6" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/blog" className="flex gap-2 items-center">
            <BookOpenIcon className="w-6 h-6" />
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="flex gap-2 items-center">
            <InformationCircleIcon className="w-6 h-6" />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/tags" className="flex gap-2 items-center">
            <HashtagIcon className="w-6 h-6" />
            <span>Tags</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
