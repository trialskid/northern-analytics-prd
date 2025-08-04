import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'Northern Analytics - Business Intelligence & Process Automation',
    template: '%s | Northern Analytics'
  },
  description: 'Expert business intelligence, process automation, and custom application development services to transform your business operations.',
  keywords: ['business intelligence', 'process automation', 'data analytics', 'custom applications'],
  authors: [{ name: 'Jamey Gulley' }],
  creator: 'Jamey Gulley',
  metadataBase: new URL('https://northern-analytics.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://northern-analytics.com',
    siteName: 'Northern Analytics',
    images: [
      {
        url: '/assets/img/og.png',
        width: 1200,
        height: 630,
        alt: 'Northern Analytics - Business Intelligence & Process Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/img/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://formspree.io" />
        <script defer data-domain="northern-analytics.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="min-h-screen bg-white antialiased">
        <StructuredData />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}