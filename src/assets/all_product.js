import p1_img from "../assets/women1.jfif";
import p2_img from "../assets/men1.webp";
import p3_img from "../assets/women2.jpg";
import p4_img from "../assets/7.jpg";
import p5_img from "../assets/kurta.jpg";
import p6_img from "../assets/women3.jpg";
import p7_img from "../assets/3.jfif";
import p8_img from "../assets/women4.webp";
import p9_img from "../assets/men5.webp";
import p10_img from "../assets/women5.webp";
import p11_img from "../assets/men6.webp";
import p12_img from "../assets/women6.webp";
import p13_img from "../assets/men-shorts.webp";
import p14_img from "../assets/women7.webp";
import p15_img from "../assets/men8.jpg";
import p16_img from "../assets/women8.jfif";
import p18_img from "../assets/kid1.jpg";
import p19_img from "../assets/kid2.jfif";
import p20_img from "../assets/kid3.jfif";
import p21_img from "../assets/kid4.webp";
import p22_img from "../assets/kid5.jfif";
import p23_img from "../assets/kid6.jfif";
import p24_img from "../assets/kid7.webp";
import p25_img from "../assets/kid8.jfif";

let all_product = [
  {
    id: 1,
    name: "Kurti",
    category: "women",
    image: p1_img,
    new_price: 499,
    old_price: 899,
    description:
      "A stylish and comfortable women's kurti, perfect for casual or semi-formal wear.",
  },
  {
    id: 2,
    name: "Shirt",
    category: "men",
    image: p2_img,
    new_price: 699,
    old_price: 1099,
    description:
      "Classic men’s shirt with a modern fit, perfect for both formal and casual settings. Made from breathable fabric, it offers all-day comfort and effortless style for any occasion.",
  },
  {
    id: 21,
    name: "Denim Shirt",
    category: "kid",
    image: p18_img,
    new_price: 849,
    old_price: 1199,
    description:
      "Trendy and comfortable denim shirt for kids, perfect for casual wear. Made from soft, durable fabric, it offers a stylish look while providing all-day comfort for active little ones.",
  },
  {
    id: 3,
    name: "Saree",
    category: "women",
    image: p3_img,
    new_price: 999,
    old_price: 1399,
    description:
      "Elevate your ethnic style with this elegant saree, designed for timeless charm and modern grace. Perfect for festive occasions, weddings, and cultural celebrations, this saree offers a flattering drape and a sophisticated look that every woman will love.",
  },
  {
    id: 4,
    name: "Sweater",
    category: "men",
    image: p4_img,
    new_price: 899,
    old_price: 1349,
    description:
      "Warm and stylish men’s sweater made from premium fabric. Perfect for layering in colder weather, offering both comfort and a modern look for casual or semi-formal occasions.",
  },
  {
    id: 6,
    name: "Dress",
    category: "women",
    image: p6_img,
    new_price: 949,
    old_price: 1299,
    description:
      "Chic and elegant women’s dress perfect for parties or casual outings. Features a flattering fit, soft fabric, and stylish design that adds charm to your wardrobe.",
  },
  {
    id: 7,
    name: "Hoodie",
    category: "men",
    image: p7_img,
    new_price: 949,
    old_price: 1399,
    description:
      "Comfortable and trendy men’s hoodie made from premium fabric. Perfect for chilly days, casual wear, or layering. Combines warmth, style, and everyday versatility in one essential piece.",
  },
  {
    id: 8,
    name: "Leggings",
    category: "women",
    image: p8_img,
    new_price: 399,
    old_price: 699,
    description:
      "Stretchy and stylish women’s leggings designed for comfort and movement. Ideal for workouts or casual wear, with a flattering fit and soft fabric that feels great all day long.",
  },
  {
    id: 9,
    name: "Jeans",
    category: "men",
    image: p9_img,
    new_price: 999,
    old_price: 1299,
    description:
      "Classic men's denim jeans with a modern fit, suitable for everyday wear and casual outings.",
  },
  {
    id: 10,
    name: "Jumpsuit",
    category: "women",
    image: p10_img,
    new_price: 989,
    old_price: 1349,
    description:
      "Trendy and comfortable women’s jumpsuit perfect for casual outings or special occasions. Features a flattering silhouette, soft fabric, and effortless style that makes dressing up quick and chic.",
  },
  {
    id: 11,
    name: "Jacket",
    category: "men",
    image: p11_img,
    new_price: 1199,
    old_price: 1499,
    description:
      "Stylish and warm men’s jacket, perfect for winter. Combines comfort with a modern look for everyday and travel wear.",
  },
  {
    id: 12,
    name: "Gown",
    category: "women",
    image: p12_img,
    new_price: 799,
    old_price: 1299,
    description:
      "Elegant women’s gown, perfect for formal events and special occasions. Crafted with luxurious fabric, it offers a flattering fit and timeless design that exudes grace and sophistication.",
  },
  {
    id: 13,
    name: "Shorts",
    category: "men",
    image: p13_img,
    new_price: 399,
    old_price: 799,
    description:
      "Comfortable and versatile men’s shorts, ideal for warm weather. Made with breathable fabric for all-day comfort, offering a relaxed fit that pairs well with casual tees and sneakers.",
  },
  {
    id: 14,
    name: "Top",
    category: "women",
    image: p14_img,
    new_price: 399,
    old_price: 699,
    description:
      "Stylish and versatile women’s top, perfect for casual or semi-formal wear. Made with soft fabric and a flattering fit, it pairs easily with jeans, skirts, or trousers for any occasion.",
  },
  {
    id: 15,
    name: "T-Shirt",
    category: "men",
    image: p15_img,
    new_price: 449,
    old_price: 699,
    description:
      "Casual and comfortable men’s T-shirt made from soft, breathable fabric. Ideal for daily wear, with a modern fit that pairs well with jeans, shorts, or joggers.",
  },
  {
    id: 5,
    name: "Kurta",
    category: "men",
    image: p5_img,
    new_price: 799,
    old_price: 1149,
    description:
      "Traditional men’s kurta, perfect for festive occasions or casual outings. Crafted from soft fabric, it combines comfort with style, offering a relaxed fit and elegant design for modern men.",
  },
  {
    id: 16,
    name: "Skirt",
    category: "women",
    image: p16_img,
    new_price: 649,
    old_price: 1099,
    description:
      "Stylish and versatile women’s skirt, perfect for both casual and formal occasions. Made from soft, breathable fabric, it offers a flattering fit and a chic, modern silhouette.",
  },
  {
    id: 23,
    name: "Cargo Pants",
    category: "kid",
    image: p19_img,
    new_price: 599,
    old_price: 999,
    description:
      "Durable and stylish cargo pants for kids, perfect for outdoor adventures. Made from tough fabric, offering a comfortable fit with multiple pockets for convenience and practicality on the go.",
  },
  {
    id: 24,
    name: "Trousers",
    category: "kid",
    image: p20_img,
    new_price: 449,
    old_price: 899,
    description:
      "Comfortable and versatile trousers for kids, perfect for school or casual wear. Made from soft fabric with a durable fit, offering both style and ease of movement for everyday activities.",
  },
  {
    id: 17,
    name: "Tank Top",
    category: "kid",
    image: p21_img,
    new_price: 199,
    old_price: 349,
    description:
      "Cool and breathable tank top for kids, ideal for warm weather. Made from soft, lightweight fabric, it offers comfort and freedom of movement for active little ones.",
  },
  {
    id: 22,
    name: "Formal Pants",
    category: "kid",
    image: p22_img,
    new_price: 699,
    old_price: 1099,
    description:
      "Elegant formal pants for kids, perfect for special occasions or school events. Crafted from premium fabric, offering a comfortable fit and a polished look for young ones.",
  },
  {
    id: 20,
    name: "Leather Jacket",
    category: "kid",
    image: p23_img,
    new_price: 999,
    old_price: 1399,
    description:
      "Stylish and durable leather jacket for kids, perfect for adding a cool edge to any outfit. Made from high-quality leather, offering warmth, comfort, and timeless style for young trendsetters.",
  },
  {
    id: 19,
    name: "Gym Shorts",
    category: "kid",
    image: p24_img,
    new_price: 299,
    old_price: 499,
    description:
      "Comfortable and breathable gym shorts for kids, perfect for sports or casual wear. Made from soft, stretchy fabric, offering freedom of movement and durability for active young athletes.",
  },
  {
    id: 18,
    name: "Casual Blazer",
    category: "kid",
    image: p25_img,
    new_price: 1099,
    old_price: 1349,
    description:
      "Chic and versatile casual blazer for kids, perfect for semi-formal events or school functions. Made from lightweight fabric, offering a smart, stylish look with a comfortable fit.",
  },
];

export default all_product;
