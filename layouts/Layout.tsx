import { Sidebar } from "@/components/sidebar";
import Head from "next/head";
import React from "react";

interface LayoutProps {
  title: string;
  children: JSX.Element;
}

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="">
      <div className="flex w-full">
        <Sidebar />
        <section className="flex w-full flex-col">{children}</section>
      </div>
    </main>
  </>
);

export default Layout;
