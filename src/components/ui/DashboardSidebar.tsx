import { Button } from "@nextui-org/button";
import { CopyPlus } from "lucide-react";
import Link from "next/link";

const DashboardSidebar = async ({ uniqueCategories }: any) => {
  return (
    <div className="border h-screen rounded-xl border-l-neutral-300 m-3">
      <div className="w-full flex gap-2 bg-green-950 text-white py-3 px-3 rounded-t-xl text-xl font-semibold">
        <CopyPlus /> <span>Categories</span>
      </div>
      <ul className="space-y-1 grid grid-cols-2 gap-2 m-2 ">
        {uniqueCategories.map((catItem: any) => (
          <Button
            radius="lg"
            variant="ghost"
            className=" border bg-yellow-800  shadow-xl w-full text-left py-2 px-1"
          >
            <li>
              <Link
                href={`/dashboard/category?category=${catItem}`}
                className="flex items-center gap-2 rounded-lg px-4 py-2 hover:text-black text-gray-700"
              >
                <span className="text-md p-3 text-white  text-left hidden lg:block font-medium">
                  {catItem}
                </span>
              </Link>
            </li>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
