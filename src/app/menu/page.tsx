import Header from '@/components/Header';
import PricingTable from '@/components/PricingTable';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] text-white">
        <PricingTable />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}