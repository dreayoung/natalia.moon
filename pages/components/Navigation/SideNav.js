import Image from 'next/image';

import logonm from '../../../public/logo-moon.png';

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col fixed z-50 gap-4 items-center right-10 top-32 text-[0.95rem] font-bdsans text-bbrown">
      <span className="text-xs underline underline-offset-4">Menu</span>
      {/* <p className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">Upcoming Shows</p> */}
      <p className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">Gallery</p>
      <p className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">About</p>
      <p className="rounded-3xl hover:bg-bbrown/5 px-6 py-1">Contact</p>
      <Image src={logonm} alt="moon" className="w-14" />
    </div>
  );
}
