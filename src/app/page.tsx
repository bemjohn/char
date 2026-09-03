import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuGrid from '@/components/MenuGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] text-white">
        <Hero />
        <MenuGrid />
        <About />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}