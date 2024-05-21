import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Container from "@/components/ui/Container";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      <div className="lg:col-span-9 col-span-9 m-2 rounded-xl p-3 border">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default layout;
