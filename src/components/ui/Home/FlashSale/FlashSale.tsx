import React from "react";
import CoundownTimer from "../../Countdown";
import FlashSaleCard from "../../FlashSaleCard";
import SectionCard from "../../SectionCard";
import ProductSlider from "../../ProductSlider";
import Link from "next/link";
import { ArrowBigRightDash } from "lucide-react";

const FlashSale = async () => {
  const response = await fetch(
    "https://supplies-store-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );
  const items = await response.json();
  const discountedItems = items?.data?.filter(
    (product: any) => product.discount
  );

  return (
    <div className="lg:mb-14 mb-3 bg-slate-50">
      <SectionCard Ltitle="Flash Sale" Rtitle={<CoundownTimer />} />
      <ProductSlider>
        {discountedItems?.slice(0, 7).map((product: any) => (
          <FlashSaleCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            discount={product.discount}
          />
        ))}
      </ProductSlider>
      {/* <div className="text-center flex justify-end bg-primary-100 w-full rounded-2xl text-white py-1 hover:bg-blue-200 px-3 hover:text-black"> */}
      <Link
        href="/flash-sale"
        className="flex justify-end font-bold gap-2 bg-blue-100 hover:bg-blue-200 px-3 hover:text-black rounded-lg"
      >
        <p>See All</p>

        <ArrowBigRightDash />
      </Link>
      {/* </div> */}
    </div>
  );
};

export default FlashSale;
