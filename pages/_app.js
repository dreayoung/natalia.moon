import '@/styles/globals.css';
import 'tw-elements/dist/css/tw-elements.min.css';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from './components/Other/SplashScreen';
import Navbar from './components/Essentials/Navbar';
import Footer from './components/Essentials/Footer';
import SideNav from './components/Navigation/SideNav';

export default function App({ Component, pageProps }) {
  // const pathname = usePathname();
  // const isHome = pathname === '/';

  // const [isLoading, setIsLoading] = useState(isHome);
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsLoading(false), 6000);
  //   return () => clearTimeout(timeout);
  // }, [isLoading]);

  return (
    <>
      <Navbar />
      <SideNav />
      <main className="pt-8 lg:pt-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
