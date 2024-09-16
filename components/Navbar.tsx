import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="px-10 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" height={52} width={350} alt="logo" />
        </Link>

        <ul className="flex items-center gap-x-4">
          <li>
            <Button variant="ghost" className="font-bold" asChild>
              <Link href="/work-journey">رحلة العمل الموسمي</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="font-bold" asChild>
              <Link href="#">الدخول</Link>
            </Button>
          </li>
          <li>
            <Button className="font-bold" asChild>
              <Link href="/register">التقديم الآن</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
