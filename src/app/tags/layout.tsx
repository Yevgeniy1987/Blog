import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import NavigationBar from "@/components/layout/NavigationBar";
import SideBar from "@/components/layout/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 flex-wrap">{children}</div>;
}
