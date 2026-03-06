import type { Metadata } from 'next';
import '@/styles/globals.css';
import LayoutClient from './LayoutClient';

export const metadata: Metadata = {
  title: 'Appify Digital - Build Stunning Websites & Apps',
  description: 'Professional website development, mobile apps, restaurant websites, salon booking systems, and e-commerce solutions.',
  keywords: 'web development, mobile app, restaurant website, salon booking, e-commerce, digital agency',
  authors: [{ name: 'Appify Digital' }],
  openGraph: {
    title: 'Appify Digital - Digital Solutions for Your Business',
    description: 'We build stunning websites and powerful apps for restaurants, salons, startups, and organizations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0F2027" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
