import CategoryCard from "@/components/ui/CategoryCard";
import SectionCard from "@/components/ui/SectionCard";
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
      {/* category product  */}
      <SectionCard Rtitle="" Ltitle={data?.data[0]?.category__name} />
      <div className="grid lg:grid-cols-5 grid-cols-1 p-3 gap-3">
        {data?.data.map((p: any) => (
          <CategoryCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default CategoryDashboard;