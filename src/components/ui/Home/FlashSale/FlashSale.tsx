import React from "react";
import CoundownTimer from "../../Countdown";
import FlashSaleCard from "../../FlashSaleCard";
import SectionCard from "../../SectionCard";
import ProductSlider from "../../ProductSlider";
import { getProducts } from "@/app/Api/GetData";
import Link from "next/link";

const FlashSale = async () => {
  const items: any = await getProducts();
  const discountedItems = items?.data?.filter(
    (product: any) => product.discount
  );

  return (
    <div className="lg:mb-14 mb-3 bg-slate-50">
      <SectionCard Ltitle="Flash Sale" Rtitle={<CoundownTimer />} />
      <Link href="/flash-sale">See ALl</Link>
      <ProductSlider>
        {discountedItems?.map((product: any) => (
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
    </div>
  );
};

export default FlashSale;
