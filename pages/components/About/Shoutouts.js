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
    <div className="xs:bg-gradient-to-b lg:bg-gradient-to-tr from-[#fff7dcff]/40 to-transparent xs:border-x-0 xs:border-t-2 xs:border-t-[#fff7dcff] md:border-y-0 border-l-2 border-l-[#fff7dcff] md:border-r-2 md:border-r-[#fff7dcff] lg:border-r-0 gap-6 flex flex-col items-center justify-center lg:flex-row  md:w-[90%] xl:w-[75%] rounded-full pt-6 pb-10  lg:pl-0 m-auto">
      <div className="relative flex flex-col xs:w-40 md:w-60 lg:w-72">
        <Image src={moon} alt="moon logo" className="animate-spin-slow" />
        <Image src={ball22} alt="n.m" className=" absolute" />
      </div>
      <div className="font-bdsans text-bbrown lg:w-[60%] xs:px-6 md:px-20">
        <p className="text-xs">Featured in</p>
        <Carousel dotPosition="right" dots={false} effect="fade" autoplay>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              &quot;Masterful performance &amp; lasting impression!&quot;
            </p>
            <span className="italic">- Vogue</span>
          </div>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              &quot;The passion is felt through every step.&quot;
            </p>
            <span className="italic">- Time</span>
          </div>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">&quot;Story telling expressive movements.&quot;</p>
            <span className="italic">- Inida Today</span>
          </div>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              &quot;The performance left the audience spellbound.&quot;
            </p>
            <span className="italic">- Outlook</span>
          </div>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              &quot;It is always a pleasure to see you live&quot;
            </p>
            <span className="italic text-bbrown">- Wonder</span>
          </div>
          <div className="text-bbrown tracking-wide py-3">
            <p className="">&quot;cant wait to see you again!&quot;</p>
            <span className="italic">- Film Fare</span>
          </div>

          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              &quot;Beautifully amazing! without a doubt.&quot;
            </p>
            <span className="italic">- The Ballet Herald</span>
          </div>

          <div className="text-bbrown tracking-wide py-3">
            <p className="">
              {' '}
              &quot;we love you! encore! encore! such beauty!&quot;
            </p>
            <span className="italic">- Forbes India</span>
          </div>
        </Carousel>

        <hr className="border-t-bbrown/10 mt-3 w-1/2" />

        <div className="xs:w-auto xs:px-10 lg:w-80 mt-3 grid grid-cols-4 md:grid-cols-4 place-items-center xs:gap-4 gap-8">
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
