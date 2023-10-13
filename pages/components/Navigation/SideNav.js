import Image from 'next/image';
import Link from 'next/link';

import logonm from '../../../public/logo-moon.png';

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col fixed z-50 gap-4 items-center right-10 top-32 text-[0.95rem] font-bdsans text-bbrown">
      <span className="text-xs underline underline-offset-4">Menu</span>
      <Link href="/gallery" className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">
        Gallery
      </Link>
      <Link href="/about" className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">
        About
      </Link>
      <Link href="/contact" className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">
        Contact
      </Link>
      <Link href="/">
        <Image src={logonm} alt="moon" className="w-14" />
      </Link>
    </div>
  );
}
