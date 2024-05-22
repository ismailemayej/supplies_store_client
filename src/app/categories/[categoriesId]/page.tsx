import ProductCard from "@/components/ui/ProductCard";
import SectionCard from "@/components/ui/SectionCard";
import React from "react";
const AllCategory = async ({ searchParams }: any) => {
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
      <div className="grid lg:grid-cols-5 grid-cols-2 p-3 gap-3">
        {data?.data?.map((product: any) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            discount={product.discount}
            rating={product.ratings}
          />
        ))}
      </div>
    </>
  );
};

export default AllCategory;
