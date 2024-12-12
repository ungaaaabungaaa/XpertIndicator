import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happymo',
  description: 'Copy Trades, Leverage Our Powerful Indicator, & Trade with Confidence!',
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
        <NextUIProvider>
          <Toaster position="bottom-center" />
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}