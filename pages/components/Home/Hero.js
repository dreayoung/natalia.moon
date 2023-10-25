import { InstagramOutlined, SendOutlined } from '@ant-design/icons';

export default function Hero() {
  return (
    <>
      <div className="flex flex-row-reverse items-center justify-center gap-3 mt-14 lg:mt-0 mb-8 lg:mb-12">
        <div className="flex items-center justify-between rounded-3xl w-60 bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown text-xs cursor-pointer transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40">
          Send a message
          <SendOutlined />
        </div>
        <div className="hidden lg:block rounded-3xl bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40 text-xs cursor-pointer">
          Upcoming Shows
        </div>
        <hr className="rotate-90 w-8 border-bbrown/20 border-[1px]" />
        <div className="text-xs rounded-3xl bg-[#b95f80]/20 font-bold transition-all duration-300 hover:ring-4 ring-2 ring-[#da7398] py-3 px-5 font-bdsans text-bbrown cursor-pointer">
          <InstagramOutlined twoToneColor="pink" />
        </div>
      </div>
      <div className="min-h-screen lg:mr-52 xs:mx-4 md:mx-24 lg:mx-40 p-24 rounded-[3rem] font-bdsans text-white bg-[url('/bgvid.gif')] bg-cover bg-center">
        <h1 className="text-[0.65rem] md:text-xs italic text-center">
          #1 Award-winning ballerina extraordinaire.
        </h1>
      </div>
    </>
  );
}
