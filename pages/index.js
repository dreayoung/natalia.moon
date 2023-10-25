import { SendOutlined } from '@ant-design/icons';
import Hero from './components/Home/Hero';
import UpcomingShows from './components/Navigation/UpcomingShows';

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4 mb-8">
        <div className="hidden lg:flex items-center justify-between rounded-3xl w-60 bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown text-sm cursor-pointer transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40">
          Send a message
          <SendOutlined />
        </div>
        <div className="hidden lg:block rounded-3xl bg-bbrown/20 py-3 px-5 font-bdsans text-bbrown transition-all duration-300 hover:ring-4 ring-2 ring-bbrown/40 text-sm cursor-pointer">
          Upcoming Shows
        </div>
        <hr className="hidden lg:block md:rotate-90 w-8 border-bbrown/20 border-[1px]" />
        <div className="hidden lg:block text-center rounded-3xl bg-[#b95f80]/20 text-[#b95f80] font-bold transition-all duration-300 hover:ring-4 ring-2 ring-[#da7398] py-3 px-5 font-bdsans text-bbrown text-sm cursor-pointer">
          How to
        </div>
      </div>
      <Hero />
    </>
  );
}
