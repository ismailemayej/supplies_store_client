import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 ">
        <div className="col-span-3">
          <DashboardSidebar />
        </div>
        <div className="lg:col-span-9 col-span-9 m-2 h-screen  rounded-xl p-3 border">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
