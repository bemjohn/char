import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHAR | We Grill, You Chill',
  description: 'Authentic Nigerian cuisine - smokey jollof, fire-grilled suya, rich soups & stews. We grill, you chill.',
  keywords: ['nigerian food', 'jollof rice', 'suya', 'egusi soup', 'catering', 'bulk food orders', 'char'],
  authors: [{ name: 'CHAR' }],
  creator: 'CHAR',
  publisher: 'CHAR',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://char.ng',
    title: 'CHAR | We Grill, You Chill',
    description: 'Authentic Nigerian cuisine - smokey jollof, fire-grilled suya, rich soups & stews.',
    siteName: 'CHAR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAR | We Grill, You Chill',
    description: 'Authentic Nigerian cuisine - smokey jollof, fire-grilled suya, rich soups & stews.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}