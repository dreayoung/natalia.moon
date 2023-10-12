import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import dwe from '../../../public/dwe.png';

export default function Footer() {
  return (
    <div className="bg-[#1f2023] mt-20 pt-24 text-center px-10 lg:px-0 text-sm text-[#fff7dc] font-black flex flex-col font-bdsans items-center xs:w-full lg:w-[90%] h-[40vh] lg:ml-16 border-x-bbrown/20 rounded-t-[100px] md:rounded-t-[200px] border-t-2 border-t-[#fff7dcff]">
      <div>This is a demo site.</div>
      <span>
        All pictures and text used on this site is generated through ChatGPT
        &amp; Ai Photo Generators
      </span>

      <div className="mt-4 p-4">Developed and created by dwe</div>
    </div>
  );
}
