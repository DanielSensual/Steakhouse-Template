import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import MenuShowcase from '@/components/MenuShowcase';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <MenuShowcase />
        <Experience />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
