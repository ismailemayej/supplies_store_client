import ProductDetails from "@/components/ui/ProductDetails";
import "react-rater/lib/react-rater.css";
const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/product/${params.productId}`
  );

  const data = await res.json();
  return (
    <div>
      <ProductDetails productInfo={data} />
    </div>
  );
};

export default ProductDetail;
