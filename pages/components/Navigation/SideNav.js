import Image from 'next/image';

import logonm from '../../../public/logo-moon.png';

export default function SideNav() {
  return (
    <div className="hidden lg:flex flex-col fixed z-50 gap-6 items-center right-10 top-32 text-sm font-bdsans text-bbrown">
      <span className="text-xs">Menu</span>
      <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Upcoming Shows</p>
      <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Photo Album</p>
      <p className="rounded-3xl bg-bbrown/5 px-6 py-1">About</p>
      <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Contact</p>
      <Image src={logonm} alt="moon" className="w-20" />
    </div>
  );
}
