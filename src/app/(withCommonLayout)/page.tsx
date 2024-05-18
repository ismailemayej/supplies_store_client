import HeroSection from "@/components/ui/Home/HeroSection/HeroSection";
import Container from "../../components/ui/Container";
import FlashSale from "@/components/ui/Home/FlashSale/FlashSale";
import Category1 from "@/components/ui/Home/Category/Category1";
import Category2 from "@/components/ui/Home/Category/Category2";
import Category3 from "@/components/ui/Home/Category/Category3";
import TrendingProducts from "@/components/ui/Home/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <Container className="">
        <HeroSection />
        <FlashSale />
        <Category1 />
        <Category2 />
        <Category3 />
        <TrendingProducts />
      </Container>
    </>
  );
};
export default HomePage;
