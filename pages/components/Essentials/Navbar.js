import React from 'react';

import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Navbar() {
  return (
    <nav className="absolute bg-[#ececec] flex items-center justify-center w-[90%] -translate-x-1/2 left-1/2 text-center pt-12 z-50 pb-[2rem] text-bbrown border-b-[1px] border-b-bbrown/20">
      {/* <span className="font-bdsans text-xs pb-2">
        #1 Award-winning ballerina extraordinaire.
      </span> */}

      <div className="text-3xl whitespace-nowrap md:text-6xl font-brstd absolute -translate-x-1/2 left-1/2 top-16 px-2 pt-0 rounded-full bg-[#ececec]">
        Natalia Moon
      </div>

      {/* <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-sm cursor-pointer">
        send a message
      </div> */}
    </nav>
  );
}
