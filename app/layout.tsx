import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Banana Garden - Premium Tropical Plants',
  description: 'Discover beautiful tropical and indoor plants with expert care guides. Transform your space with premium botanical collections.',
  keywords: ['plants', 'tropical', 'indoor plants', 'banana plants', 'plant care'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
          <Navbar />
          <main className="page-container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
