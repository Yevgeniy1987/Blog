'use client'
import Link from "next/link"; 
import Image from "next/image";
// // import { imageLoader } from "../image/imageLoader";
import ImgHome from "../../../public/images/icons8-house-16.png";
import ImgBlog from "../../../public/images/icons8-blog-16.png";
import ImgTag from "../../../public/images/icons8-tag-16.png";

import ImgAbout from "../../../public/images/icons8-blog-60.png";


export default function NavigationBar() {
  return (
    <nav className="w-1/5">
      <ul className="flex gap-3 flex-col">
        <li className="flex gap-2">
          
        <Image
            src={ImgHome}
            alt={"home"}
            width={30}
            height={30}
          />
          <Link href="/">Home</Link>
        </li>
        <li className="flex gap-2">
        <Image
            src={ImgBlog}
            alt={"blogs page"}
            width={30}
            height={30}
          />
          <Link href="/blog">Blog</Link>
        </li>
        <li className="flex gap-2">
        <Image
            src={ImgAbout}
            alt={"about page"}
            width={30}
            height={30}
          />
          <Link href="/about">About</Link>
        </li>
        <li className="flex gap-2">
        <Image
            src={ImgTag}
            alt={"tags page"}
            width={30}
            height={30}
          />
          <Link href="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
}
