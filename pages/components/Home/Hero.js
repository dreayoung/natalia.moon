import Image from 'next/image';
import line1 from '../../../public/lin1.png';
import UpcomingShows from '../Navigation/UpcomingShows';

import ballet from '../../../public/ballet.png';
import vid from '../../../public/bgvid.gif';

export default function Hero() {
  return (
    <div className="min-h-screen lg:mr-52 mx-8 md:mx-24 lg:mx-40 p-24 rounded-[3rem] font-bdsans text-white bg-[url('/bgvid.gif')] bg-cover bg-center">
      {/* <div className="font-brstd text-center ">Welcome to..</div> */}
      {/* <Image src={vid} alt="vid" className="w-96 m-auto rounded-full" /> */}

      <h1 className="text-[0.65rem] md:text-xs italic text-center">
        #1 Award-winning ballerina extraordinaire.
      </h1>

      {/* <Image src={line1} alt="line" className="w-12 m-auto mb-4 absolute" /> */}
      {/* <UpcomingShows /> */}

      {/* <div className="min-h-screen bg-[url('/bgvid.gif')] bg-cover bg-center mx-40 mt-20"></div> */}
    </div>
  );
}
