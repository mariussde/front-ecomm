'use client';

import Link from 'next/link';
import { Camera } from 'lucide-react';
import { CartPreview } from './cart-preview';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-8 w-8" />
          <span className="text-xl font-bold">PhotoStore</span>
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            All Products
          </Link>    
        </nav>
        <div className="flex items-center gap-4">
          <CartPreview />
        </div>
      </div>
    </header>
  );
}