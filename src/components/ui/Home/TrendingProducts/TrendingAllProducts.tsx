import React from "react";
import SectionCard from "../../SectionCard";
import TrendingProductCard from "./TrendingProductCard";

const TrendingAllProducts = ({ data }: any) => {
  const filterdata = data?.data?.filter((item: any) => item?.ratings >= 4.3);
  return (
    <div className="h-screen">
      <SectionCard Ltitle="Trending Products" Rtitle="Most popular products" />
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
        {filterdata.map((product: any) => (
          <TrendingProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            discount={product.discount}
            // ratings={product.rating}
            // review={product.review}
            // category={product.category}
            // description={product.description}
            // count={product.count}
            // seller={product.seller}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingAllProducts;
