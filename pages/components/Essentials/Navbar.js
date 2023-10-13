import React, { useState } from 'react';

import { Modal, ConfigProvider } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed bg-[#f1eeea] flex items-center justify-center xs:w-full lg:w-[90%] -translate-x-1/2 left-1/2 text-center pt-10 z-50 pb-[2rem] text-bbrown border-b-[1px] border-b-bbrown/20">
      <div
        onClick={showModal}
        className="absolute hover:cursor-pointer bottom-0 flex border-t-[1px] border-t-bbrown/20 border-x-[1px] border-x-bbrown/20 rounded-t-full pb-1 px-4 pt-2 right-4 sm:px-6 sm:right-12 lg:hidden rounded-b-3xl bg-[#f1eeea] font-bdsans z-50"
      >
        <EllipsisOutlined />
      </div>

      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: '#f1eeea',
            },
          },
        }}
      >
        <Modal
          style={{ top: '7.5rem' }}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={
            <div className="py-3 mx-4 text-xs text-center font-bdsans font-bold text-bbrown border-t-[1px] border-t-bbrown/5">
              <span>Do you like this site?</span>
              <br />
              <span>www.createdbydwe.tech</span>
            </div>
          }
        >
          <div className="flex flex-col items-center justify-center font-bold bg-gradient-to-b from-[#fff7dcff]/40 to-transparent font-bdsans text-lg gap-5 py-14 border-t-[1px] rounded-t-full m-4 border-x-[1px] border-[#fff7dcff]">
            <p>Gallery</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </Modal>
      </ConfigProvider>

      <div className="text-3xl whitespace-nowrap font-brstd absolute -translate-x-1/2 left-1/2 xs:top-14 top-10 px-4 rounded-full bg-[#f1eeea]">
        Natalia Moon
      </div>
    </nav>
  );
}
