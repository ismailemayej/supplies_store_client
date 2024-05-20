export const getProductsByCategory = async (category: any) => {
  const response = await fetch(
    `https://supplies-store-server.vercel.app/api/v1?category=${category}`
  );
  const data = await response.json();
  return data;
};
export const getProducts = async () => {
  const response = await fetch(
    "https://supplies-store-server.vercel.app/api/v1/products"
  );
  const data = await response.json();
  return data;
};
