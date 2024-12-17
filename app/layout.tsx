import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="flex items-center justify-center gap-4 bg-black p-2 text-center text-xs font-bold text-white">
          <Image
            src="/marvel.png"
            width={80}
            height={80}
            alt="Marvel Systems"
          />
          <div>
            التطوير بواسطة
            <Link href="https://www.marvel.com.sa"> Marvel Systems</Link>
          </div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
