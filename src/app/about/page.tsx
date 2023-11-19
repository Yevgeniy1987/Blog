import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About'
};

export default function About() {
  return <div className="w-1/2">
    <h1 className="text-xl uppercase">About page</h1>
    
    <Link href="/about/company">About company</Link>
  </div>;
}
