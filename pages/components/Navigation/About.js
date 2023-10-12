import { List, Avatar, Carousel, ConfigProvider } from 'antd';
import Image from 'next/image';

import ball22 from '../../../public/moon/ball22.png';
import ball33 from '../../../public/moon/ball33.png';
import ball1 from '../../../public/moon/ball-1.png';
import medal from '../../../public/medal.png';

import point from '../../../public/point.jpg';
import vg from '../../../public/magazines/Vogue-logo.png';
import time from '../../../public/magazines/time.png';
import filmf from '../../../public/magazines/filmf.png';
import india from '../../../public/magazines/india.png';
import outlook from '../../../public/magazines/outlook.png';
import herald from '../../../public/magazines/herald.png';
import forbes from '../../../public/magazines/forbes.png';
import wonder from '../../../public/magazines/wonder.png';

import UpcomingShows from './UpcomingShows';

const data = [
  {
    title: 'The Prix de Lausanne',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Spain, <span className="italic">2023</span>
      </div>
    ),
  },
  {
    title: 'The Benois de la Danse',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Bolshoi Theatre, <span className="italic">2023</span>
      </div>
    ),
  },
  {
    title: 'The Princess Grace Awards',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        New York, <span className="italic">2019</span>
      </div>
    ),
  },
  {
    title: 'The National Dance Awards',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Brazil, <span className="italic">2013</span>
      </div>
    ),
  },
  {
    title: 'The Positano Premia la Danza Leonide Massine',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Italy, <span className="italic">2010</span>
      </div>
    ),
  },
];

export default function About() {
  return (
    <main className="">
      <div className="relative flex flex-col md:flex-row w-full lg:w-[70%] xl:w-[75%] border-t-bbrown/10 border-t-[1px] md:border-l-[1px] md:border-b-[1px] md:border-b-bbrown/10 md:border-l-bbrown/10 items-center rounded-full gap-4 mb-28 py-10 md:mx-14 md:pl-14 lg:pl-20 lg:ml-20 xl:ml-32 ">
        <Image src={ball22} alt="first image" className="w-52 md:w-full" />

        <div className="font-bdsans text-bbrown mx-8">
          <ConfigProvider
            theme={{
              token: {
                fontSize: 14,
              },
            }}
          >
            <Carousel dotPosition="right" dots={false} autoplay>
              <div className="text-bbrown font-bdsans">
                <p>
                  &quot;Masterful performance &amp;lasting impression!&quot;
                </p>
                <span className="italic hidden md:block">- Vogue</span>
              </div>
              <div className="text-bbrown font-bdsans">
                <p>
                  &quot;The passion is shown and felt through every step.&quot;
                </p>
                <span className="italic hidden md:block">- Time</span>
              </div>
              <div className="text-bbrown font-bdsans">
                <p>&quot;Story telling expressive movements.&quot;</p>
                <span className="italic">- Inida Today</span>
              </div>
              <div className="text-bbrown font-bdsans">
                <p>&quot;The performance left the audience spellbound.&quot;</p>
                <span className="italic">- Outlook</span>
              </div>
              <div className="text-bbrown font-bdsans">
                <p>&quot;It is always a pleasure to see you live&quot;</p>
                <span className="italic text-bbrown">- Wonder</span>
              </div>
              <div className="text-bbrown font-bdsans">
                <p>
                  &quot;cant wait to see you again, it&apos;s always a good
                  one&quot;
                </p>
                <span className="italic">- Film Fare</span>
              </div>

              <div className="text-bbrown font-bdsans">
                <p>&quot;Beautifully amazing! without a doubt.&quot;</p>
                <span className="italic">- The Ballet Herald</span>
              </div>

              <div className="text-bbrown font-bdsans">
                <p> &quot;we love you! encore! encore! such beauty!&quot;</p>
                <span className="italic">- Forbes India</span>
              </div>
            </Carousel>
          </ConfigProvider>

          <hr className="border-t-bbrown/10 mt-3 w-1/2" />

          <div className="w-64 md:w-72 mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
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

      <div className="flex relative text-xs md:text-sm my-16 mx-8 md:mx-20 lg:mx-0 lg:ml-32 lg:w-[70%] pb-4 rounded-2xl gap-5 flex-col text-left justify-center  text-bbrown font-bdsans">
        <p className="font-brstd text-7xl text-bbrown/5 absolute -left-10 -top-8">
          About
        </p>
        <span className="leading-6 md:leading-8">
          <span className="text-2xl">N</span>atalia Moon is a renowned
          professional ballerina hailing from the heart of New York City. Born
          and raised amidst the vibrant culture of the Big Apple, Natalia&apos;s
          journey into the world of ballet began at the tender age of five. Her
          innate talent and unwavering dedication to the art of dance quickly
          set her apart as a rising star in the ballet scene.
        </span>
        <span className="leading-6 md:leading-8">
          Natalia&apos;s exceptional skill and grace on the stage earned her a
          scholarship to the prestigious New York City Ballet Academy, where she
          honed her craft under the guidance of world-class instructors. Her
          dedication paid off when, at the age of 18, she made her debut as a
          soloist with the New York City Ballet, wowing audiences with her
          breathtaking performances.
        </span>
        <span className="leading-6 md:leading-8">
          Her rise to stardom was marked by a series of prestigious awards and
          accolades, including the coveted Gold Medal at the International
          Ballet Competition in Moscow. This triumph solidified Isabella&apos;s
          status as one of the most gifted and accomplished ballerinas of her
          generation.
        </span>
        <span className="leading-6 md:leading-8">
          Throughout her illustrious career, Isabella has graced stages around
          the world, captivating audiences with her mesmerizing performances.
          Her repertoire includes iconic roles in classical ballets such as
          &quot;Swan Lake,&quot; &quot;The Nutcracker,&quot; and
          &quot;Giselle,&quot; where she has left an indelible mark with her
          exquisite technique and emotional depth.
        </span>
        <span className="leading-6 md:leading-8">
          Off the stage, Isabella remains a humble and dedicated advocate for
          the art of ballet. She has become an inspiration to aspiring dancers,
          teaching masterclasses and mentoring young talent in her beloved New
          York City.
        </span>
        <span className="leading-6 md:leading-8">
          Isabella Aurora&apos;s journey from the streets of New York to the
          pinnacle of the ballet world is a testament to her unwavering passion,
          talent, and sheer determination. Her name will forever be synonymous
          with grace, elegance, and the beauty of ballet.
        </span>

        <div className="my-20 ">
          <div className="font-brstd text-6xl md:text-7xl pt-6 text-bbrown/10 md:whitespace-nowrap">
            Awards &amp; Achievements
          </div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Image src={medal} alt="medals" className="w-10" />}
                  title={
                    <div className="font-bdsans font-black text-xs md:text-[1rem] text-bbrown">
                      {item.title}
                    </div>
                  }
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </main>
  );
}
