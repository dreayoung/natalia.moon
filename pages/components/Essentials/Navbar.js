import React from 'react';
import Image from 'next/image';

import logonm from '../../../public/nm-logo.png';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Navbar() {
  return (
    <nav className="fixed z-50 bg-white w-full bg-transparent pt-8 flex items-end justify-center px-8 pb-6 gap-2 border-b-[1px]">
      {/* <Image src={logonm} alt="n.m" className="w-28" /> */}

      <div className="font-brstd text-4xl px-3 flex flex-col items-center text-black">
        Natalia Moon
        <span className="font-bdsans text-xs">
          award-winning ballerina extraordinaire.{' '}
        </span>
      </div>

      {/* <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-sm cursor-pointer">
        send a message
      </div> */}
    </nav>
  );
}
