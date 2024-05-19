import React from "react";
import SectionCard from "../../SectionCard";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../ProductCard";
import ProductSlider from "../../ProductSlider";
import { getProductsByCategory } from "@/app/Api/GetData";
const Category = async () => {
  const category = "Floor Cleaners";
  const data = await getProductsByCategory(category);
  return (
    <div className=" justify-center">
      <SectionCard
        Ltitle={data.data[0].category__name}
        Rtitle={
          <Link href={`/categories/${data.data[0].category__name}`}>
            See All
          </Link>
        }
      />
      <ProductSlider>
        {data?.data?.map((product: any) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            img={product.images__001}
            // ratings={product.rating}
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

export default Category;
