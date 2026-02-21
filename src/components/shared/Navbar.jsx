import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
      <div className="h-[150px] bg-purple-200 font-bold text-5xl flex justify-center items-center  ">
        <ul>
        <Link href={'/'}>Home</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/reviews'}>Reviews</Link>
        <Link href={'/about-us'}>About Us</Link>
       </ul>
      </div>
    );
};

export default Navbar;