import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import dwe from '../../../public/dwe.png';

export default function Footer() {
  return (
    <div className="my-20 pt-24 text-center lg:p-14 text-xs text-bbrown font-black flex flex-col font-bdsans items-center xs:w-full lg:w-[90%] max-h-[30vh] lg:h-[20vh] lg:ml-16 border-x-bbrown/20 rounded-t-[200px] border-t-[1px] border-t-bbrown/20 ">
      <div>This is a demo site.</div>
      <span>
        All pictures and text used on this site is generated through ChatGPT
        &amp; Ai Photo Generators
      </span>

      <div className="mt-4 p-4">Developed and created by dwe</div>
      {/* <Image src={dwe} alt="nm logo" className="w-20 pb-6" /> */}
    </div>
  );
}
