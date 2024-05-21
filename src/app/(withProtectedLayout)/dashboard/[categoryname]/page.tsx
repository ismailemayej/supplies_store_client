import CategoryCard from "@/components/ui/CategoryCard";
import SectionCard from "@/components/ui/SectionCard";
import Link from "next/link";
import React from "react";

const CategoryDashboard = async ({ searchParams }: any) => {
  const res = await fetch(
    `https://supplies-store-server.vercel.app/api/v1?category=${searchParams.category}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <>
      <div className="relative overflow-x-auto shadow-xl h-screen sm:rounded-xl ">
        {data ? (
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
            <thead className="text-xs uppercase text-white border-b-slate-900 bg-gray-100 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {data?.data.map((product: any) => (
              <CategoryCard
                key={product._id}
                id={product._id}
                title={product.title}
                price={product.price}
                img={product.images__001}
                discount={product.discount}
                rating={product.ratings}
                category={product.category__name}
              />
            ))}
          </table>
        ) : (
          <>
            <h2 className="text-center text-2xl text-red-500 font-bold ">
              No Item no item created
            </h2>
            <div className="flex justify-center">
              <Link
                href="/"
                className="hover:text-black hover:bg-green-300 text-center text-xl mt-5 bg-green-500 px-4 py-2 text-white rounded-xl"
              >
                Create
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CategoryDashboard;
