import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Andrew",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Ju",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      rating: 4.5,
      gender: "male",
      numReviews: 10,
      countInStock: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/product-2.jpg",
      price: 100,
      rating: 4.0,
      gender: "male",
      numReviews: 10,
      countInStock: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/product-3.jpg",
      price: 220,
      rating: 4.8,
      gender: "male",
      numReviews: 17,
      countInStock: 0,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/product-4.jpg",
      price: 78,
      rating: 4.5,
      gender: "male",
      numReviews: 14,
      countInStock: 10,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/product-5.jpg",
      price: 65,
      rating: 4.5,
      gender: "male",
      numReviews: 10,
      countInStock: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/product-6.jpg",
      price: 139,
      rating: 4.5,
      gender: "male",
      numReviews: 15,
      countInStock: 10,
      description: "high quality product",
    },
  ],
};
export default data;