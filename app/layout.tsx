import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title:
    'التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم حج 1445 هـ',
  description:
    'التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم حج 1445 هـ كل ما عليك فعله هو ملئ استمارة التسجيل عبر الضغط على زر التقديم الآن بالأسفل',

  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
