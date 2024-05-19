import React from "react";
import CoundownTimer from "../../Countdown";
import FlashSaleCard from "../../FlashSaleCard";
import SectionCard from "../../SectionCard";
import ProductSlider from "../../ProductSlider";
import ProductCard from "../../ProductCard";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(
    "https://supplies-store-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );
  const data = await res.json();
  return (
    <div className="lg:mb-14 mb-3 bg-slate-50">
      <SectionCard Ltitle="Flash Sale" Rtitle={<CoundownTimer />} />

      <ProductSlider>
        {data?.data?.slice(1, 20)?.map((product: any) => (
          <FlashSaleCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            // rating={product.rating}
            // review={product.review}
            // category={product.category}
            // description={product.description}
            // count={product.count}
            // seller={product.seller}
          />
        ))}
      </ProductSlider>
    </div>
  );
};

export default FlashSale;
