import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Timeline, Card, Col, Row, Statistic } from 'antd';

export default function UpcomingShows() {
  return (
    <main className="mt-10 lg:mt-0 lg:mr-52 md:mx-14 lg:ml-20 xs:px-6 md:px-20 w-auto">
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false} style={{ backgroundColor: '#f1eeea' }}>
            <Statistic
              title="Purchased"
              value={86.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} style={{ backgroundColor: '#f1eeea' }}>
            <Statistic
              title="Remaining"
              value={13.77}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <div className="my-10">
        <div className="font-bdsans flex flex-col md:flex-row md:items-end xs:items-start justify-between text-xs pb-4">
          <div className="font-black text-3xl leading-10">Upcoming Shows</div>
          <span className="text-gray-400">having trouble?</span>
        </div>
        <hr className="mb-6 border-bbrown/20" />
        <Timeline
          items={[
            {
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="">
                    <p className="line-through">Marlo, Spain</p>
                    <p className="text-xs line-through">The Obscle</p>
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
                  <p className="text-xs">Nov 5th</p>
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
                  <p className="text-xs">Nov 27th</p>
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
                  <p className="text-xs">Nov 30th</p>
                </div>
              ),
            },
            {
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="">
                    <p className="font-extrabold text-black">
                      Bangkok, Thailand
                    </p>
                    <p className="text-xs">Thai World</p>
                  </div>
                  <p className="text-xs">Dec 1st</p>
                </div>
              ),
            },
            {
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="">
                    <p className="line-through">Mumbai, India</p>
                    <p className="text-xs line-through">Left Field</p>
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
                  <p className="text-xs">Dec 5th</p>
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
                  <p className="text-xs">Dec 11th</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
