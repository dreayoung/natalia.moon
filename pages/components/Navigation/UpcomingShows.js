import React from 'react';
import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function UpcomingShows() {
  return (
    <div className="xs:mx-0 md:mx-6 pt-14 pb-8 xs:px-8 md:px-20 lg:w-[85vw] m-auto xs:bg-gradient-to-b lg:bg-gradient-to-tr from-[#fff7dcff]/40 to-transparent xs:border-x-0 xs:border-t-2 xs:border-t-[#fff7dcff] md:border-y-0 border-l-2 border-l-[#fff7dcff] md:border-r-2 md:border-r-[#fff7dcff] lg:border-r-0 rounded-[80px]">
      <Timeline
        items={[
          {
            dot: (
              <div className="bg-none">
                <FrownTwoTone twoToneColor="#eb2f96" />
              </div>
            ),
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="text-xs md:text-sm">
                  <p className="line-through">Marlo, Spain</p>
                  <p className="line-through">September 1st | 8pm</p>
                </div>
                <div className="rounded-3xl hover:bg-rose-200 px-6 py-2 font-bold font-bdsans text-rose-600 text-xs cursor-pointer">
                  Cancelled
                </div>
              </div>
            ),
          },
          {
            dot: <HeartTwoTone />,
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="text-xs md:text-sm">
                  <p className="font-extrabold text-black">
                    Geneva, Switzerland
                  </p>
                  <p>October 5th | 8pm</p>
                </div>
                <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-xs cursor-pointer">
                  Get tickets
                </div>
              </div>
            ),
          },
          {
            dot: <HeartTwoTone />,
            children: (
              <div className="flex items-end justify-between font-bdsans gap-4">
                <div className="text-xs md:text-sm">
                  <p className="font-extrabold text-black">Lagos, Nigeria</p>
                  <p>October 27th | 6pm</p>
                </div>
                <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-xs cursor-pointer">
                  Get tickets
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
