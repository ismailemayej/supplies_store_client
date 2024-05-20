import { getProducts } from "@/app/Api/GetData";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getProducts();
  const filterdata = data.data?.filter((item: any) => item.category__name);
  // Using a Set to store unique category names
  const categorySet = new Set(
    filterdata.map((data: any) => data.category__name)
  );
  const uniqueCategories = Array.from(categorySet);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <DashboardSidebar uniqueCategories={uniqueCategories} />
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
