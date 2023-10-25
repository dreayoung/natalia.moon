import React, { useState } from 'react';

import { Modal, ConfigProvider } from 'antd';
import { EllipsisOutlined, SendOutlined } from '@ant-design/icons';

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
  // bg-[#f1eeea]
  return (
    <nav className="bg-[#f1eeea] flex items-center xs:w-full lg:w-[90%] text-center pt-10 m-auto text-bbrown">
      <hr className="border-bbrown/20 w-20 border-[1px]" />
      <div
        onClick={() => router.push('/')}
        className="text-2xl whitespace-nowrap font-brstd px-2 rounded-full hover:cursor-pointer"
      >
        Natalia Moon
      </div>
      <hr className="border-bbrown/20 border-[1px] w-full" />
      <div
        onClick={showModal}
        className="hover:cursor-pointer flex bg-[#f1eeea] border-[1px] border-bbrown/20 rounded-full p-4 sm:px-6 lg:hidden rounded-b-3xl"
      >
        <EllipsisOutlined />
      </div>
      <hr className="lg:hidden block border-bbrown/20 border-[1px] w-12" />

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
          <div className="flex flex-col items-center justify-center text-xs font-bold bg-gradient-to-b from-[#fff7dcff]/40 to-transparent font-bdsans gap-5 py-14 border-t-[1px] rounded-t-full m-4 border-x-[1px] border-[#fff7dcff]">
            <div
              onClick={() => (router.push('/about'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => (router.push('/contact'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              Upcoming Shows
            </div>
            <div
              onClick={() => (router.push('/gallery'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              Gallery
            </div>
            <div className="flex items-center gap-4 justify-between rounded-3xl bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown hover:cursor-pointer transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40">
              Send a message
              <SendOutlined />
            </div>
            <div
              onClick={() => (router.push('/about'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              How to Use
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </nav>
  );
}
