import '@/styles/globals.css';
import 'tw-elements/dist/css/tw-elements.min.css';
import Navbar from './components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}
