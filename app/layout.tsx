import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NerdPyramid Hub',
  description: 'Created by NerdPyramid Hub',
  generator: 'NerdPyramid Hub',
  icons: {
    icon: [
      { url: '/nerdpyramid_logo_bg_removed.png.png', sizes: '40x40', type: 'image/png' }, // Non-scalable PNG iconx32' }, // Scalable SVG 
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" 
      suppressHydrationWarning={true}
     data-qb-installed="true">
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
