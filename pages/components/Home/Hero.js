import Image from 'next/image';
import bgvid from '../../../public/bgvid.gif';

import line1 from '../../../public/lin1.png';
import UpcomingShows from '../Navigation/UpcomingShows';

export default function Hero() {
  return (
    <div className="font-bdsans text-bbrown">
      <Image
        src={line1}
        alt="line"
        className="absolute w-12 left-32 top-[45%]"
      />
      <div className="absolute z-50 xs:text-xs xs:text-[#fff7dcff]/60 md:text-bbrown md:text-[1rem] xs:left-[8rem] md:left-40 lg:left-52 md:top-48 xs:top-[16rem] -rotate-6">
        #1 Award-winning ballerina extraordinaire.
      </div>
      <span className="absolute font-brstd text-8xl xs:left-6 md:left-20 lg:left-32 -rotate-6">
        Upcoming Shows
      </span>
      <div className="xs:w-full xs:h-[70vh] md:w-[70vw] md:h-[50vh] lg:h-[50vh] xl:h-[70vh] rounded-t-full m-auto bg-[url('/bgvid.gif')] bg-cover border-x-[#fff7dcff] border-x-4" />
      <UpcomingShows />

      <div className="min-h-screen"></div>
    </div>
  );
}
