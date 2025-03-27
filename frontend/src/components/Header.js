import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="p-5 text-xl bg-white text-black flex justify-between">
      <h1 className='text-2xl'>Logo</h1>
      <ul className="flex w-xs justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/contact">Contacts</Link>
        </li>
      </ul>
      <div >
        <ul className='flex justify-around w-50 text-white'>
        <li className='bg-blue-500 w-20 h-8 flex justify-around'>
          <Link href="/auth/login">
            <button>Login</button>
          </Link>
        </li>

        <li className='bg-blue-600 w-25 h-8 flex justify-around'>
          <Link href="/auth/register">
            <button>Register</button>
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header