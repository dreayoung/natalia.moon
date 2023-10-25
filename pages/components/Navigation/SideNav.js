import Image from 'next/image';
import Link from 'next/link';

import logonm from '../../../public/logo-moon.png';

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col fixed z-50 gap-4 items-center right-4 top-28 text-[1rem] font-bdsans text-bbrown">
      <span className="text-xs underline underline-offset-4">Menu</span>
      <Link
        href="/about"
        className="rounded-3xl hover:bg-bbrown/20 hover:backdrop-blur-md px-6 py-1"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="rounded-3xl hover:bg-bbrown/20 hover:backdrop-blur-md px-6 py-1"
      >
        Contact
      </Link>
      <Link
        href="/gallery"
        className="rounded-3xl hover:bg-bbrown/20 hover:backdrop-blur-md px-6 py-1"
      >
        Tour Dates
      </Link>
      <Link href="/">
        <Image src={logonm} alt="moon" className="w-14" />
      </Link>
    </div>
  );
}
