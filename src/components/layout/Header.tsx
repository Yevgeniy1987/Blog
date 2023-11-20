"use client";
import Img from '../../../public/images/icons8-blog-16.png'
import Image from "next/image";

import Link from "next/link";

import { HeaderSearch } from "../search/HeaderSearch";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="py-5 container mx-auto flex">
        <Link href="/">
          {/* TODO: @Zhenya - implement via next/image component */}
          <Image
            src={Img}
            alt={"Logo"}
            width={40}
            height={40}
          />
          {/* <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
            className="h-[40px] w-[50px]"
          /> */}
        </Link>

        <HeaderSearch />
      </div>
    </header>
  );
}
