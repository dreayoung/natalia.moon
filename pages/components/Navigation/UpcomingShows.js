import React from 'react';
import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function UpcomingShows() {
  return (
    <div className="mt-8 xs:mx-4 md:mx-14 lg:mx-40 py-10 xs:px-6 md:px-20 w-auto m-auto xs:bg-gradient-to-b lg:bg-gradient-to-tr from-[#fff7dcff]/40 to-transparent xs:border-x-0 xs:border-t-2 xs:border-t-[#fff7dcff] md:border-y-0 border-l-2 border-l-[#fff7dcff] md:border-r-2 md:border-r-[#fff7dcff] lg:border-r-0 rounded-[80px]">
      <div className="flex flex-col lg:flex-row items-center justify-between text-xs pb-4">
        <div className="font-brstd text-5xl text-bbrown">Upcoming Shows</div>
        <span>having trouble?</span>
      </div>
      <hr className="mb-6 border-[#fff7dc]" />
      <Timeline
        items={[
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="line-through">Marlo, Spain</p>
                  <p className="text-xs">The Obscle</p>
                </div>
                <div className="rounded-3xl hover:bg-rose-200 px-6 py-2 font-bold font-bdsans text-rose-600 text-xs cursor-pointer">
                  Cancelled
                </div>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">
                    Geneva, Switzerland
                  </p>
                  <p className="text-xs">King&apos;s Dome</p>
                </div>
                <p className="text-xs">November 5th @8pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="line-through">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <div className="rounded-3xl hover:bg-rose-200 px-6 py-2 font-bold font-bdsans text-rose-600 text-xs cursor-pointer">
                  Cancelled
                </div>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4 md:text-lg">
                <div className="">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p className="text-xs">Showroom 512</p>
                </div>
                <p className="text-xs">November 27th @6pm</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
