import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xpertindicator',
  description: 'Empower your trades with precision insights, optimize performance, & make data-driven decisions confidently.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="./favicon-96x96.webp" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.webp" />
        <meta name="apple-mobile-web-app-title" content="./MyWebSite" />
        <link rel="manifest" href="./site.webmanifest" />
      </Head>
      <body className={`relative ${inter.className}`}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  )
}
