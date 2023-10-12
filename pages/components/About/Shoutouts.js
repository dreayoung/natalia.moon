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
      <div className="relative flex flex-col w-60 lg:w-72">
        <Image src={moon} alt="moon logo" className="animate-spin-slow" />
        <Image src={ball22} alt="n.m" className=" absolute" />
      </div>
      <div className="font-bdsans text-bbrown xs:w-[90%] lg:w-[60%] xs:px-12 md:px-24 lg:px-0 mx-auto">
        <p className="text-xs hidden lg:block">Featured in</p>
        <Carousel dotPosition="right" dots={false} effect="fade" autoplay>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;Masterful performance &amp; lasting impression!&quot;
            </p>
            <span className="italic">- Vogue</span>
          </div>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;The passion is felt through every step.&quot;
            </p>
            <span className="italic">- Time</span>
          </div>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">&quot;Story telling expressive movements.&quot;</p>
            <span className="italic">- Inida Today</span>
          </div>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;The performance left the audience spellbound.&quot;
            </p>
            <span className="italic">- Outlook</span>
          </div>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;It is always a pleasure to see you live&quot;
            </p>
            <span className="italic text-bbrown">- Wonder</span>
          </div>
          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;cant wait to see you again! you the goat&quot;
            </p>
            <span className="italic">- Film Fare</span>
          </div>

          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              &quot;Beautifully amazing! without a doubt.&quot;
            </p>
            <span className="italic">- The Ballet Herald</span>
          </div>

          <div className="text-bbrown font-bdsans tracking-wide py-3 xs:text-left md:text-center lg:text-left">
            <p className="">
              {' '}
              &quot;we love you! encore! encore! such beauty!&quot;
            </p>
            <span className="italic">- Forbes India</span>
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
