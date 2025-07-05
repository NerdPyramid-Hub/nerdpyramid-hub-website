import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NerdPyramid Hub',
  description: 'Created bt NerdPyramid Hub',
  generator: 'NerdPyramid Hub',
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
      </body>
    </html>
  )
}
