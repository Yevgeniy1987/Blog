"use client";
import Img from "../../../public/images/icons8-blog-16.png";
import Image from "next/image";

import Link from "next/link";

import { SearchBar } from "../search/SearchBar";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="py-5 container mx-auto flex">
        <Link href="/">
          <Image src={Img} alt={"Logo"} width={40} height={40} />
        </Link>

        <SearchBar />
      </div>
    </header>
  );
}
