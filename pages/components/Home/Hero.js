import Image from 'next/image';
import line1 from '../../../public/lin1.png';
import UpcomingShows from '../Navigation/UpcomingShows';

import ballet from '../../../public/ballet.png';


export default function Hero() {
  return (
    <div className="font-bdsans text-bbrown">
      {/* <div className="font-brstd">Welcome to..</div> */}
      <h1 className="text-center md:leading-[4rem] xs:text-4xl md:text-[3rem] mb-10 xs:px-6 px-40 md:mx-32 lg:px-60">
        #1 Award-winning ballerina extraordinaire.
      </h1>

      <Image src={ballet} alt="line" className="xs:w-40 md:w-52 m-auto" />
      <Image src={line1} alt="line" className="w-12 m-auto mb-4" />
      <UpcomingShows />

      {/* <div className="min-h-screen bg-[url('/bgvid.gif')] bg-cover bg-center mx-40 mt-20"></div> */}
    </div>
  );
}
