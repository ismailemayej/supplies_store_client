"use server";
import { getProducts } from "@/app/Api/GetData";
import ProductDetails from "@/components/ui/ProductDetails";
import "react-rater/lib/react-rater.css";

export const generateStaticParams = async () => {
  const data = await getProducts();
  return data.data.slice(0, 11).map((p: any) => ({
    productId: p._id,
  }));
};
const ProductDetail = async ({ params }: any) => {
  const res = await fetch(
    `https://supplies-store-server.vercel.app/api/v1/product/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  console.log("post Details data id", params.productId);
  const data = await res.json();
  console.log("post Details data id", data);
  return (
    <div>
      <ProductDetails productInfo={data} />
    </div>
  );
};

export default ProductDetail;
