import React from "react";
import SectionCard from "../../SectionCard";
import Link from "next/link";
import ProductSlider from "../../ProductSlider";
import ProductCard from "../../ProductCard";
import { getProducts } from "@/app/Api/GetData";

const TrendingProducts = async () => {
  const response = await fetch(
    "https://supplies-store-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );
  const data = await response.json();
  const filteredByRatings = data?.data?.filter(
    (item: any) => item?.ratings >= 4.3
  );
  return (
    <div className="lg:mt-10">
      <SectionCard
        Ltitle=" Trending Products"
        Rtitle={<Link href="/trending-products">See All Products</Link>}
      />

      <ProductSlider>
        {filteredByRatings?.slice(0, 7).map((product: any) => (
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
