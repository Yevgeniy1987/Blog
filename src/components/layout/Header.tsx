'use client';

import Link from 'next/link';

import { HeaderSearch } from '../search/HeaderSearch';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="py-5 container mx-auto flex">
        <Link href="/">
          {/* TODO: @Zhenya - implement via next/image component */}
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
            className="h-[40px] w-[50px]"
          />
        </Link>

        <HeaderSearch />
      </div>
    </header>
  );
}
