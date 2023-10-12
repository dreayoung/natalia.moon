import { Carousel } from 'antd';
import Image from 'next/image';

import vg from '../../../public/magazines/Vogue-logo.png';
import time from '../../../public/magazines/time.png';
import filmf from '../../../public/magazines/filmf.png';
import india from '../../../public/magazines/india.png';
import outlook from '../../../public/magazines/outlook.png';
import herald from '../../../public/magazines/herald.png';
import forbes from '../../../public/magazines/forbes.png';
import wonder from '../../../public/magazines/wonder.png';

import ball22 from '../../../public/moon/ball22.png';
import moon from '../../../public/logo-moon.png';

export default function Shoutouts() {
  return (
    <div className="xs:bg-gradient-to-b lg:bg-gradient-to-tr from-[#fff7dcff]/40 to-transparent xs:border-x-0 xs:border-t-2 xs:border-t-[#fff7dcff] md:border-y-0 border-l-2 border-l-[#fff7dcff] md:border-r-2 md:border-r-[#fff7dcff] lg:border-r-0 lg:-space-x-7 flex flex-col items-center justify-center lg:flex-row md:w-[80%] xl:w-[75%] rounded-full pt-6 pb-10 m-auto">
      <div className="relative flex flex-col w-40 m-auto xs:my-6 lg:my-0">
        <Image src={moon} alt="moon logo" className="animate-spin-slow" />
        <Image src={ball22} alt="n.m" className="-top-6 absolute" />
      </div>
      <div className="font-bdsans text-bbrown xs:w-[90%] lg:w-[70%] xs:px-12 md:px-24 lg:px-0 mx-auto">
        <p className="text-xs ">⭑⭑⭑⭑</p>
        <Carousel dotPosition="right" dots={false} effect="fade" autoplay>
          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;Masterful performance &amp; lasting impression!&quot;
            </p>
          </div>
          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;The passion is felt through every step.&quot;
            </p>
          </div>
          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;Wow! &amp; again the audience is spellbound.&quot;
            </p>
          </div>
          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">&quot;Soooooo ready for the next show!&quot;</p>
          </div>
          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;YOU ARE THE GOAT!!!! BRAVO. BRAVO. BRAVO&quot;
            </p>
          </div>

          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className="">&quot;Beautiful &amp; Amazing! +more, without a doubt.&quot;</p>
          </div>

          <div className="text-[#6e664a] text-xs md:text-sm font-bdsans font-semibold tracking-wide py-2 xs:text-left md:text-center lg:text-left">
            <p className=""> &quot;we love youuu! encore! encore! encore!&quot;</p>
          </div>
        </Carousel>

        <div className="border-t-[1px] border-t-bbrown/10 xs:w-auto lg:w-96 xs:mx-auto lg:mx-0 mt-3 grid xs:grid-cols-4 md:grid-cols-4 place-items-center xs:gap-4 gap-8">
          <Image src={vg} alt="first image" />
          <Image src={time} alt="first image" />
          <Image src={india} alt="first image" />
          <Image src={outlook} alt="first image" />
          <Image src={wonder} alt="first image" />
          <Image src={filmf} alt="first image" />
          <Image src={herald} alt="first image" />
          <Image src={forbes} alt="first image" />
        </div>
      </div>
    </div>
  );
}
