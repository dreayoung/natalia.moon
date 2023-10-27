import React, { useState } from 'react';
import { Modal, ConfigProvider } from 'antd';
import { EllipsisOutlined, SendOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import logo from '../../../public/nm-logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-[#f1eeea] flex items-center justify-center xs:w-full lg:w-[90%] text-center pt-10 m-auto text-bbrown">
      <div
        className={`font-bdsans absolute transform -translate-x-1/2 left-1/2 xs:text-xs md:text-sm top-28 text-black w-[80vw] ${
          pathname == '/' || pathname == '/404' ? 'lg:hidden' : null
        }`}
      >
        {pathname == '/about'
          ? null
          : pathname == '/shows' || pathname == '/contact'
          ? null
          : pathname == '/'
          ? `Welcome to the enchanting world of dance, where grace, passion, and
        dedication come together in the life story of a remarkable ballerina.`
          : null}
      </div>

      <hr className="border-bbrown/20 w-20 border-[0.85px] hidden lg:block" />

      <Image
        src={logo}
        alt="logo"
        className="hidden lg:block w-32 mb-10 lg:mb-0"
        onClick={() => router.push('/')}
      />

      <hr className="border-bbrown/20 border-[0.85px] w-full hidden lg:block" />

      <div className="lg:hidden flex items-center justify-between w-full mb-20 mx-8">
        {/* mobile */}
        <Image
          src={logo}
          alt="logo"
          className="lg:hidden w-20"
          onClick={() => router.push('/')}
        />
        <div
          onClick={showModal}
          className="hover:cursor-pointer block lg:absolute top-4 right-4 w-14 text-center text-xs transition-all ease-in-out duration-300 bg-[#f1eeea] border-[0.85px] hover:border-bbrown border-bbrown/20 rounded-full p-2 lg:hidden rounded-b-3xl"
        >
          <EllipsisOutlined />
        </div>
      </div>

      <hr className="hidden lg:block border-bbrown/20 border-[0.85px] w-12" />

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
            <div className="py-3 text-xs text-center font-bdsans font-bold text-black border-t-[1px] border-t-bbrown/5">
              <Link href="https://www.createdbydwe.tech" target="_blank">
                Do you like this site?
                <br />
                www.createdbydwe.tech
              </Link>
            </div>
          }
        >
          <div className="flex flex-col items-center justify-center text-[1rem] font-bold bg-gradient-to-b from-[#fff7dcff]/40 to-transparent font-bdsans gap-5 py-10 border-t-[1px] rounded-t-full m-4 border-x-[1px] border-[#fff7dcff]">
            <div
              onClick={() => (router.push('/'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              Home
            </div>
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
              Tour Dates
            </div>
            <div
              onClick={() => (router.push('/gallery'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              Contact
            </div>
            {/* <div className="flex items-center gap-4 justify-between rounded-3xl bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown hover:cursor-pointer transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40">
              Send a message
              <SendOutlined />
            </div> */}
            {/* <div
              onClick={() => (router.push('/about'), handleCancel())}
              className="rounded-3xl hover:bg-bbrown/5 hover:backdrop-blur-md px-6 py-1 hover:cursor-pointer"
            >
              How to Use
            </div> */}
          </div>
        </Modal>
      </ConfigProvider>
    </nav>
  );
}
