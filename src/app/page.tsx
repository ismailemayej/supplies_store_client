import Navbar from "@/components/shared/Navbar/Navbar";
import HomePage from "./(withCommonLayout)/page";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
