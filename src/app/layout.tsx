import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://syntralabs.dev'),
  title: 'Syntra Labs | Software & Technology Studio',
  description:
    'Studio de engenharia de software especializado na concepção e desenvolvimento de plataformas SaaS sob medida, arquitetura de alta escala e sistemas empresariais modernos.',
  keywords: [
    'Syntra Labs',
    'Software Studio',
    'SaaS',
    'Desenvolvimento de Software',
    'NestJS',
    'Next.js',
    'PostgreSQL',
    'Engenharia de Software',
    'Sistemas Web',
    'PDV',
  ],
  authors: [{ name: 'Lucas Silva de Lucena', url: 'https://github.com/lucasdelucenadev' }],
  creator: 'Syntra Labs',
  openGraph: {
    title: 'Syntra Labs | Software & Technology Studio',
    description:
      'Engenharia de software de elite para empresas que exigem robustez, performance e escala.',
    url: 'https://syntralabs.dev',
    siteName: 'Syntra Labs',
    images: [
      {
        url: '/syntra/syntra_labs_brand_presentation_1794948905664.jpg',
        width: 1200,
        height: 630,
        alt: 'Syntra Labs Brand Identity',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntra Labs | Software & Technology Studio',
    description:
      'Engenharia de software de elite para empresas que exigem robustez, performance e escala.',
    images: ['/syntra/syntra_labs_brand_presentation_1794948905664.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#080B11',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#080B11] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
