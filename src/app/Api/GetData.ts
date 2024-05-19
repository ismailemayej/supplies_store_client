export const getProductsByCategory = async (category: any) => {
  const response = await fetch(
    `https://supplies-store-server.vercel.app/api/v1?category=${category}`
  );
  const data = response.json();
  return data;
};
