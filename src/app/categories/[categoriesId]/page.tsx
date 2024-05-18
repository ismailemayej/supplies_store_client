import CategoryCard from "@/components/ui/CategoryCard";
import SectionCard from "@/components/ui/SectionCard";
import React from "react";
const AllCategory = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1?category=${params.categoriesId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <>
      <SectionCard Rtitle="" Ltitle={data?.data[0]?.category__name} />
      <div className="grid lg:grid-cols-5 grid-cols-1 p-3 gap-3">
        {data?.data.map((p: any) => (
          <CategoryCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default AllCategory;
