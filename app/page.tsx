import Header from '@/components/Header';
import HeroVideo from '@/components/HeroVideo';
import MenuShowcase from '@/components/MenuShowcase';
import ChefStory from '@/components/ChefStory';
import Experience from '@/components/Experience';
import PrivateEvents from '@/components/PrivateEvents';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <MenuShowcase />
        <ChefStory />
        <Experience />
        <PrivateEvents />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
