'Use Client'
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      {/* <Image src={Image} alt='logo'/> */}
      <h1>OMACHI MERCHANDISE</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
