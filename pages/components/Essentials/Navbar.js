import React, { useState } from 'react';

import { Breadcrumb, Dropdown, Space, FloatButton, Modal } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed bg-[#f1eeea] flex items-center justify-center xs:w-full lg:w-[90%] -translate-x-1/2 left-1/2 text-center pt-10 z-50 pb-[2rem] text-[#1f2023] border-b-[1px] border-b-bbrown/20">
      <div
        onClick={showModal}
        className="absolute hover:cursor-pointer bottom-0 flex border-t-[1px] border-t-bbrown/20 border-x-[1px] border-x-bbrown/20 rounded-t-full pb-1 px-4 pt-2 right-4 sm:px-6 sm:right-12 lg:hidden rounded-b-3xl bg-[#f1eeea] font-bdsans z-50"
      >
        <EllipsisOutlined />
      </div>

      <Modal
        title={<h1 className="font-brstd text-2xl text-bbrown">Explore</h1>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#fff7dcff]/40 to-transparent font-bdsans text-lg gap-5 py-14 border-t-[1px] rounded-t-full mx-4 border-x-[1px] border-[#fff7dcff]">
          <p>gallery</p>
          <p>about</p>
          <p>contact</p>
        </div>
      </Modal>

      <div className="text-3xl whitespace-nowrap md:text-6xl font-brstd absolute -translate-x-1/2 left-1/2 xs:top-14 top-10 px-4 rounded-full bg-[#f1eeea]">
        Natalia Moon
      </div>
    </nav>
  );
}
