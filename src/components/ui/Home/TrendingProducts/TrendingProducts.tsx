import React from "react";
import SectionCard from "../../SectionCard";
import Link from "next/link";
import ProductSlider from "../../ProductSlider";
import ProductCard from "../../ProductCard";
import { getProducts } from "@/app/Api/GetData";

const TrendingProducts = async () => {
  const data: any = await getProducts();
  return (
    <div className="lg:mt-10">
      <SectionCard
        Ltitle=" Trending Products"
        Rtitle={<Link href="/">See All</Link>}
      />

      <ProductSlider>
        {data?.data?.map((product: any) => (
          <ProductCard
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

export default TrendingProducts;
