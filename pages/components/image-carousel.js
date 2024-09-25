import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const ImageCarousel = ({ images, speed = 50, direction = 'up' }) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (containerHeight === 0) return;

    const contentHeight = containerHeight * 6; // Double the height for seamless loop

    const animate = async () => {
      await controls.start({
        y:
          direction === 'up'
            ? [-contentHeight / 2, 0]
            : [0, -contentHeight / 2],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: contentHeight / speed,
            ease: 'linear',
          },
        },
      });
    };

    animate();
  }, [controls, speed, direction, containerHeight]);

  const renderImages = () => {
    // Duplicate the images array to create a seamless loop
    // const duplicatedImages = images.reduce((res, current) => [...res, current, current], []);
    const duplicatedOnce = images.concat(images);
    // Duplicate twice
    const duplicatedImages = duplicatedOnce.concat(duplicatedOnce);

    return duplicatedImages.map((src, index) => (
      <div
        key={index}
        className="w-full h-72 md:w-1/3 flex-shrink-0 grayscale hover:grayscale-0"
      >
        <Image
          src={src}
          alt={`Slide ${index + 1}`}
          width={400}
          height={400}
          className="w-full h-full object-cover object-center md:object-bottom"
        />
      </div>
    ));
  };

  return (
    <div ref={containerRef} className="relative w-full h-auto overflow-hidden">
      <motion.div
        animate={controls}
        className="flex flex-col"
        style={{ height: '200%' }} // Double the height for seamless loop
      >
        {renderImages()}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
