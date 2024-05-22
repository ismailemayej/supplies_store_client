import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 rounded-xl h-full m-2 p-3 border">
          Sidebar
        </div>
        <div className="lg:col-span-10 col-span-9 m-2 rounded-xl px-1 pt-0 border">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
