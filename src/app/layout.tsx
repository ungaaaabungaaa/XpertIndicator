import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast"
import { NextUIProvider } from "@nextui-org/react"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happymo',
  description: 'Copy Trades, Leverage Our Powerful Indicator, & Trade with Confidence!',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.webp', sizes: '96x96', type: 'image/webp' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'MyWebSite',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <NextUIProvider>
          <Toaster position="bottom-center" />
          {children}
        </NextUIProvider>
        <Script 
          src="//code.tidio.co/g6vp80m5v7zibf5aukkmlxxpc0yhjjwh.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

