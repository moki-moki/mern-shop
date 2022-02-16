export const getProducts = async (cat) => {
  return await fetch(
    cat ? `/api/products/allProducts${cat}` : `/api/products/allProducts`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const uploadFile = async (data) => {
  console.log(data);
  try {
    const req = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (
  name,
  image,
  price,
  description,
  category,
  sale,
  verifyToken
) => {
  console.log(verifyToken);
  try {
    await fetch("/api/products/addProduct", {
      method: "POST",
      headers: {
        token: `Bearer ${verifyToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        price,
        description,
        category,
        sale,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
