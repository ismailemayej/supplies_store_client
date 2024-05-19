import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Container from "@/components/ui/Container";
import HeroSection from "@/components/ui/Home/HeroSection/HeroSection";
import FlashSale from "@/components/ui/Home/FlashSale/FlashSale";
import Category1 from "@/components/ui/Home/Category/Category1";
import Category2 from "@/components/ui/Home/Category/Category2";
import Category3 from "@/components/ui/Home/Category/Category3";
import TrendingProducts from "@/components/ui/Home/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Container className="">
        <HeroSection />
        <FlashSale />
        <Category1 />
        <Category2 />
        <Category3 />
        <TrendingProducts />
      </Container>

      <Footer />
    </div>
  );
}
