import React from 'react';
import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function UpcomingShows() {
  return (
    <div className="mb-20 lg:mr-52 xs:mx-4 md:mx-14 lg:ml-20 py-14 xs:px-6 md:px-20 w-auto xs:bg-gradient-to-b from-[#fff7dcff]/40 to-transparent xs:border-x-0 xs:border-t-2 xs:border-t-[#fff7dcff] md:border-y-0 border-l-2 border-l-[#fff7dcff] md:border-r-2 md:border-r-[#fff7dcff] lg:border-r-0 rounded-[80px] ">
      <div className="font-bdsans flex flex-col md:flex-row md:items-end xs:items-start justify-between text-xs pb-4">
        <div className="font-black text-3xl">Upcoming Shows</div>
        <span>having trouble?</span>
      </div>
      <hr className="mb-6 border-[#fff7dc]" />
      <Timeline
        items={[
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
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
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="font-extrabold text-black">
                    Geneva, Switzerland
                  </p>
                  <p className="text-xs">Kings Dome</p>
                </div>
                <p className="text-xs">November 5th @8pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
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
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="font-extrabold text-black">Tokyo, Japan</p>
                  <p className="text-xs">Bo&apos;s Ring</p>
                </div>
                <p className="text-xs">November 30th @7pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="font-extrabold text-black">Bangkok, Thailand</p>
                  <p className="text-xs">Thai World</p>
                </div>
                <p className="text-xs">December 1st @6pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="line-through">Mumbai, India</p>
                  <p className="text-xs">Left Field</p>
                </div>
                <div className="rounded-3xl hover:bg-rose-200 px-6 py-2 font-bold font-bdsans text-rose-600 text-xs cursor-pointer">
                  Cancelled
                </div>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="font-extrabold text-black">Berlin, Germany</p>
                  <p className="text-xs">Teapot</p>
                </div>
                <p className="text-xs">December 5th @2pm</p>
              </div>
            ),
          },
          {
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="">
                  <p className="font-extrabold text-black">
                    Amsterdam, Netherlands
                  </p>
                  <p className="text-xs">Lovell&apos;s</p>
                </div>
                <p className="text-xs">December 11th @4pm</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
