import React, { useState } from 'react';

import { Modal, ConfigProvider } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { useRouter } from 'next/router';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();

  return (
    <nav className="fixed bg-[#f1eeea] flex items-center justify-center xs:w-full lg:w-[90%] -translate-x-1/2 left-1/2 text-center pt-10 z-50 pb-[2rem] text-bbrown border-b-[1px] border-b-bbrown/20">
      <div
        onClick={showModal}
        className="absolute hover:cursor-pointer -bottom-6 flex bg-[#f1eeea] border-[1px] border-bbrown/20 rounded-full p-4 right-4 sm:px-6 sm:right-12 lg:hidden rounded-b-3xl font-bdsans z-50"
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
            <div
              onClick={() => (router.push('/gallery'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1"
            >
              Gallery
            </div>
            <div
              onClick={() => (router.push('/about'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1"
            >
              About
            </div>
            <div
              onClick={() => (router.push('/contact'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1"
            >
              Contact
            </div>
          </div>
        </Modal>
      </ConfigProvider>

      <div
        onClick={() => router.push('/')}
        className="text-4xl whitespace-nowrap font-brstd absolute -translate-x-1/2 left-1/2 xs:top-14 top-10 px-4 rounded-full bg-[#f1eeea] hover:cursor-pointer"
      >
        Natalia Moon
      </div>
    </nav>
  );
}
