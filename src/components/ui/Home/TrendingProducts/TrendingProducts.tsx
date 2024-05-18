import React from "react";
import SectionCard from "../../SectionCard";
import Link from "next/link";
import ProductSlider from "../../ProductSlider";
import ProductCard from "../../ProductCard";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();

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
