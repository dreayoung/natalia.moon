import React from 'react';
import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';

export default function UpcomingShows() {
  return (
    // <div className="">
    <Timeline
      items={[
        {
          color: 'red',
          dot: <FrownTwoTone twoToneColor="#eb2f96" />,
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
                <p className="font-extrabold text-black">Geneva, Switzerland</p>
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
    // </div>
  );
}
