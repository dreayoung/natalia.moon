import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import logo from '../public/logo.svg';

import logonm from '../public/logo-moon.png';

import ball22 from '../public/moon/ball22.png';
import logo from '../public/nm-logo.png';
import About from './components/Navigation/About';

export default function Home() {
  return (
    <main className="pt-40">
      <div className="hidden lg:flex flex-col fixed z-50 gap-6 items-center right-10 top-40 text-sm font-bdsans text-bbrown">
        <span className="text-xs">Menu</span>
        <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Upcoming Shows</p>
        <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Photo Album</p>
        <p className="rounded-3xl bg-bbrown/5 px-6 py-1">About</p>
        <p className="rounded-3xl bg-bbrown/5 px-6 py-1">Contact</p>
        {/* <hr className="border-t-[#4d3e3cff]/20 border-t-[1px] w-32" /> */}
        <Image src={logonm} alt="moon" className="w-32 animate-spin-slow" />
      </div>

      {/* <Image src={logo} alt="moon" className="w-20 bottom-6 right-10 fixed" /> */}
      <About />

      {/* <span className="absolute right-14 top-[25%] text-sm font-bdsans text-black brightness-100 underline underline-offset-4">
        Awards
      </span> */}
    </main>
  );
}
