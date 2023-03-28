import bcrypt from 'bcrypt';
const data = {
  users: [
    {
      name: "isha",
      email: "admin@example.com",
      password: bcrypt.hashSync('1234',8),
      isAdmin:true,
    },
    {
      name: "vishva",
      email: "user@example.com",
      password: bcrypt.hashSync('1234',8),
      isAdmin:false,
    },
  ],
  products: [
    {
      
      name: "pillsbury atta",
      category: "weat",
      image: "/images/atta1.jpg",
      price: 278,
      countInStock: 10,
      brand: "pillsbury",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "aashirvad atta",
      category: "weat",
      image: "/images/atta2.jpg",
      price: 292,
      countInStock: 20,
      brand: "aashirvad",
      rating: 4.0,
      numReviews: 8,
      description: "high quality product",
    },
    {
      
      name: "fortune chkki frsh atta",
      category: "weat",
      image: "/images/atta3.jpg",
      price: 208,
      countInStock: 0,
      brand: "fortune",
      rating: 4.7,
      numReviews: 17,
      description: "high quality product",
    },
    {
      
      name: "chakki atta",
      category: "weat",
      image: "/images/atta4.jpg",
      price: 200,
      countInStock: 15,
      brand: "aashirvad",
      rating: 4.9,
      numReviews: 19,
      description: "high quality product",
    },
    {
      
      name: "fortune besan",
      category: "gram flour",
      image: "/images/atta5.jpg",
      price: 90,
      countInStock: 5,
      brand: "fortune",
      rating: 4.3,
      numReviews: 16,
      description: "high quality product",
    },
    {
      
      name: "fortune suji",
      category: "semolina",
      image: "/images/atta6.jpg",
      price: 26,
      countInStock: 12,
      brand: "fortune",
      rating: 4.0,
      numReviews: 9,
      description: "high quality product",
    },
    {
      
      name: "fortune suji",
      category: "semolina",
      image: "/images/atta6.jpg",
      price: 26,
      countInStock: 12,
      brand: "fortune",
      rating: 4.0,
      numReviews: 9,
      description: "high quality product",
    },
    {
      
      name: "fortune suji",
      category: "semolina",
      image: "/images/atta6.jpg",
      price: 26,
      countInStock: 12,
      brand: "fortune",
      rating: 4.0,
      numReviews: 9,
      description: "high quality product",
    },
    {
      
      name: "fortune suji",
      category: "semolina",
      image: "/images/atta6.jpg",
      price: 26,
      countInStock: 12,
      brand: "fortune",
      rating: 4.0,
      numReviews: 9,
      description: "high quality product",
    },
  ],
};
export default data;
