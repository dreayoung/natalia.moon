import React from 'react';
import Awards from './Awards';

export default function Article() {
  return (
    <div className="flex relative font-black text-xs md:text-sm my-16 mx-8 md:mx-14 lg:ml-32 lg:w-[75%] pb-4 rounded-2xl gap-5 flex-col text-left justify-center  text-bbrown font-bdsans">
      <p className="font-brstd text-7xl text-bbrown/5 absolute -left-10 -top-8">
        About
      </p>
      <span className="leading-6 md:leading-8">
        <span className="text-2xl">N</span>atalia Moon is a renowned
        professional ballerina hailing from the heart of New York City. Born and
        raised amidst the vibrant culture of the Big Apple, Natalia&apos;s
        journey into the world of ballet began at the tender age of five. Her
        innate talent and unwavering dedication to the art of dance quickly set
        her apart as a rising star in the ballet scene.
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
        accolades, including the coveted Gold Medal at the International Ballet
        Competition in Moscow. This triumph solidified Isabella&apos;s status as
        one of the most gifted and accomplished ballerinas of her generation.
      </span>
      <span className="leading-6 md:leading-8">
        Throughout her illustrious career, Isabella has graced stages around the
        world, captivating audiences with her mesmerizing performances. Her
        repertoire includes iconic roles in classical ballets such as &quot;Swan
        Lake,&quot; &quot;The Nutcracker,&quot; and &quot;Giselle,&quot; where
        she has left an indelible mark with her exquisite technique and
        emotional depth.
      </span>
      <span className="leading-6 md:leading-8">
        Off the stage, Isabella remains a humble and dedicated advocate for the
        art of ballet. She has become an inspiration to aspiring dancers,
        teaching masterclasses and mentoring young talent in her beloved New
        York City.
      </span>
      <span className="leading-6 md:leading-8">
        Isabella Aurora&apos;s journey from the streets of New York to the
        pinnacle of the ballet world is a testament to her unwavering passion,
        talent, and sheer determination. Her name will forever be synonymous
        with grace, elegance, and the beauty of ballet.
      </span>
      <Awards />
    </div>
  );
}
