import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhotoStore - Premium Photography',
  description: 'Discover and purchase stunning photography',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <footer className="mt-auto border-t">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} PhotoStore. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}