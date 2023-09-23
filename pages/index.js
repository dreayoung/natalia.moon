import { FrownTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';
import Image from 'next/image';
// import logo from '../public/logo.svg';

import logonm from '../public/logo-moon.png';

import ball1 from '../public/moon/ball22.png';
import logo from '../public/nm-logo.png';

export default function Home() {
  return (
    <main className="flex md:min-h-screen flex-col items-center justify-center overflow-hidden">
      <span className="absolute left-8 top-[25rem] md:left-52 md:top-[9rem] text-sm font-bdsans text-black brightness-100 underline underline-offset-4">
        Upcoming Shows
      </span>
      <div className="absolute top-[54%] md:top-[12rem] md:left-10 lg:left-14 flex items-start gap-6">
        <Timeline
          items={[
            {
              color: 'red',
              dot: <FrownTwoTone twoToneColor="#eb2f96" />,
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="text-xs md:text-sm">
                    <p className="line-through">Marlo, Spain</p>
                    <p className="line-through">September 1st | 8pm</p>
                  </div>
                  <div className="rounded-3xl hover:bg-rose-200 px-6 py-2 font-bold font-bdsans text-rose-600 text-xs cursor-pointer">
                    Cancelled
                  </div>
                </div>
              ),
            },
            {
              dot: <HeartTwoTone />,
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="text-xs md:text-sm">
                    <p className="font-extrabold text-black">
                      Geneva, Switzerland
                    </p>
                    <p>October 5th | 8pm</p>
                  </div>
                  <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-xs cursor-pointer">
                    Get tickets
                  </div>
                </div>
              ),
            },
            {
              dot: <HeartTwoTone />,
              children: (
                <div className="flex items-end justify-between font-bdsans gap-4">
                  <div className="text-xs md:text-sm">
                    <p className="font-extrabold text-black">Lagos, Nigeria</p>
                    <p>October 27th | 6pm</p>
                  </div>
                  <div className="rounded-3xl bg-neutral-200 px-6 py-2 font-bdsans text-bbrown text-xs cursor-pointer">
                    Get tickets
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
      <Image
        src={logonm}
        alt="moon"
        className="w-[18rem] lg:w-[25rem] top-24 md:top-40 md:w-[20rem] md:right-0 lg:right-20 absolute animate-spin-slow"
      />
      <Image
        src={ball1}
        alt="n.m"
        className="w-[16rem] lg:w-96 top-28 absolute md:top-40 md:w-[18rem] md:right-2 lg:right-20 brightness-150 rounded-full"
      />

      <Image src={logo} alt="moon" className="w-20 bottom-6 right-10 fixed" />

      <span className="absolute left-8 top-[42rem] md:top-[25rem] text-sm font-bdsans text-black brightness-100 underline underline-offset-4">
        About
      </span>
      <p className="md:w-[35rem] xl:w-[40rem] md:h-[16.5rem] lg:h-[18rem] md:overflow-y-auto top-[45rem] absolute md:left-12 md:top-[27rem] lg:top-[25rem] xl:top-[27rem] text-sm pb-20 md:pb-0 px-8 md:px-0 font-bdsans">
        <span className="hover:text-black brightness-150 leading-6">
          Natalia Moon is a renowned professional ballerina hailing from the
          heart of New York City. Born and raised amidst the vibrant culture of
          the Big Apple, Natalia&apos;s journey into the world of ballet began
          at the tender age of five. Her innate talent and unwavering dedication
          to the art of dance quickly set her apart as a rising star in the
          ballet scene.
        </span>
        <br /> <br />
        <span className="hover:text-black brightness-150 leading-6">
          Natalia&apos;s exceptional skill and grace on the stage earned her a
          scholarship to the prestigious New York City Ballet Academy, where she
          honed her craft under the guidance of world-class instructors. Her
          dedication paid off when, at the age of 18, she made her debut as a
          soloist with the New York City Ballet, wowing audiences with her
          breathtaking performances.
        </span>
        <br /> <br />
        <span className="hover:text-black brightness-150 leading-6">
          Her rise to stardom was marked by a series of prestigious awards and
          accolades, including the coveted Gold Medal at the International
          Ballet Competition in Moscow. This triumph solidified Isabella&apos;s
          status as one of the most gifted and accomplished ballerinas of her
          generation.
        </span>
        <br /> <br />
        <span className="hover:text-black brightness-150 leading-6">
          Throughout her illustrious career, Isabella has graced stages around
          the world, captivating audiences with her mesmerizing performances.
          Her repertoire includes iconic roles in classical ballets such as
          &quot;Swan Lake,&quot; &quot;The Nutcracker,&quot; and
          &quot;Giselle,&quot; where she has left an indelible mark with her
          exquisite technique and emotional depth.
        </span>
        <br /> <br />
        <span className="hover:text-black brightness-150 leading-6">
          Off the stage, Isabella remains a humble and dedicated advocate for
          the art of ballet. She has become an inspiration to aspiring dancers,
          teaching masterclasses and mentoring young talent in her beloved New
          York City.
        </span>
        <br /> <br />
        <span className="hover:text-black brightness-150 leading-6">
          Isabella Aurora&apos;s journey from the streets of New York to the
          pinnacle of the ballet world is a testament to her unwavering passion,
          talent, and sheer determination. Her name will forever be synonymous
          with grace, elegance, and the beauty of ballet.
        </span>
      </p>

      {/* <span className="absolute right-14 top-[25%] text-sm font-bdsans text-black brightness-100 underline underline-offset-4">
        Awards
      </span> */}
    </main>
  );
}
