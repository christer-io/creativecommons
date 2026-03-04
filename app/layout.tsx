import './globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative Commons Norge',
  description: 'Åpne lisense er delingskultur!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
