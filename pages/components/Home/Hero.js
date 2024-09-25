import { InstagramOutlined, SendOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImageCarousel from '../image-carousel';

const images = [
  '/food/foodimg1.jpeg',
  '/food/foodimg2.jpeg',
  '/food/foodimg3.jpeg',
  '/food/foodimg5.jpeg',
  '/food/foodimg1.jpeg',
  '/food/foodimg2.jpeg',
  '/food/foodimg3.jpeg',
  '/food/foodimg5.jpeg',
];

const images2 = [
  '/food/foodimg9.jpeg',
  '/food/foodimg8.jpeg',
  '/food/foodimg7.gif',
  '/food/foodimg4.jpeg',
  '/food/foodimg9.jpeg',
  '/food/foodimg8.jpeg',
  '/food/foodimg7.gif',
  '/food/foodimg4.jpeg',
];

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 h-screen overflow-hidden">
        <ImageCarousel images={images} speed={40} direction="down" />
        <ImageCarousel images={images2} speed={40} direction="up" />
        <div className="hidden md:block">
          <ImageCarousel images={images} speed={40} direction="down" />
        </div>
      </div>
    </>
  );
}
