import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header className='flex px-4 max-w-[950px] text-white justify-between mt-4 mx-auto'>
        <h2 className='font-bold text-lg'>Next.Js CRM</h2>
        <Link href='/add-customer' className='bg-green-500 px-2 py-[1px] rounded-md'>Add Customer</Link>
      </header>
      <main className='main px-4 min-h-screen'>
        {children}
      </main>
      <footer className='max-w-[950px] px-4 bg-stone-950 text-white mx-auto text-center p-3 mt-12 rounded-t-xl'>
        <a href="https://botostart.ir" target="_blank" rel="noopener noreferrer" className='text-blue-400'>
            Botostart
        </a>{' '}
        Next.js course | CRM Project &copy;
      </footer>
    </>
  );
};

export default Layout;
