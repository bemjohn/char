'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const { items, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black/60 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center" role="navigation" aria-label="Main navigation">
        <div className="w-full grid grid-cols-3 items-center gap-4">
          {/* Column 1: Logo - Left */}
          <Link href="/" className="flex items-center justify-start" aria-label="CHAR Home">
            <Image
              src="/LOGO.jpeg"
              alt="CHAR"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-cover"
              priority
            />
          </Link>

          {/* Column 2: Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            {['HOME', 'MENU', 'ABOUT', 'CONTACT'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#E85D2D] text-white/80"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Column 3: Action Buttons - Right */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={toggleCart}
              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-md text-sm font-medium tracking-wider uppercase hover:border-white hover:bg-white/10 transition text-white"
              aria-label={`Cart: ${totalItems} items`}
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              <span>CART</span>
              {totalItems > 0 && (
                <span className="bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <Link
              href="/menu"
              className="hidden sm:block px-4 py-2 border border-white/30 rounded-md text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-black transition text-white"
            >
              OUR MENU
            </Link>

            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}