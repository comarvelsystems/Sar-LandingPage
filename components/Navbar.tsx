import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

const Navbar = () => {
  return (
    <nav className="px-4 py-6 sm:px-10">
      <div className="flex items-center justify-between gap-10">
        <Link href="/">
          <Image src="/images/logo.svg" height={52} width={350} alt="logo" />
        </Link>

        <ul className="hidden items-center gap-x-4 lg:flex">
          <li>
            <Button variant="ghost" className="font-bold" asChild>
              <Link href="https://sar-2025.vercel.app/">
                رحلة العمل الموسمي
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="font-bold" asChild>
              <Link href="https://sar-2025.vercel.app/login">الدخول</Link>
            </Button>
          </li>
          <li>
            <Button className="font-bold" asChild>
              <Link href="https://sar-2025.vercel.app/login">التقديم الآن</Link>
            </Button>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild className="flex lg:hidden">
            <Button size="icon" className="shrink-0">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="rtl:text-right">
            <SheetHeader className="rtl:text-right">
              <SheetTitle className="mt-8">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    height={52}
                    width={350}
                    alt="logo"
                  />
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">
                تصفح قائمة الموقع
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="mt-10 w-full">
              <div>
                <Link
                  href="https://sar-2025.vercel.app/"
                  className="block py-3 font-semibold duration-500 hover:text-primary"
                >
                  رحلة العمل الموسمي
                </Link>
              </div>
              <Separator className="my-2" />
              <div>
                <Link
                  href="https://sar-2025.vercel.app/login"
                  className="block py-3 font-semibold duration-500 hover:text-primary"
                >
                  الدخول
                </Link>
              </div>
              <Separator className="my-2" />
              <div>
                <Link
                  href="https://sar-2025.vercel.app/login"
                  className="block py-3 font-semibold duration-500 hover:text-primary"
                >
                  التقديم الآن
                </Link>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
