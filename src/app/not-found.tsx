import Link from "next/link";

export default function RootNotFound() {
  return <div>
    <h1 className="text-xl uppercase text-red-700">Oh snap...page is not found!</h1>
    <Link href="/" className="hover:underline">Go back to home page</Link>
  </div>;
}
