import { Sidebar } from '@/components/sidebar';
import React from 'react';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <main className='flex h-screen w-full'>
    <Sidebar/>
    <section className='flex w-full flex-col'>{children}</section>
  </main>
);

export default Layout;