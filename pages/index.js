import SideNav from './components/Navigation/SideNav';
import About from './components/Navigation/About';

export default function Home() {
  return (
    <main className="pt-40 md:pt-52">
      <SideNav />
      <About />
    </main>
  );
}
