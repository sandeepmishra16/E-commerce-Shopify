import p5_img from "../assets/kurta.jpg";
import p15_img from "../assets/men8.jpg";
import p2_img from "../assets/men1.webp";
import p11_img from "../assets/men6.webp";

let popular_men = [
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
    id: 2,
    name: "Shirt",
    category: "men",
    image: p2_img,
    new_price: 699,
    old_price: 1099,
    description:
      "Classic men’s shirt with a modern fit, perfect for both formal and casual settings. Made from breathable fabric, it offers all-day comfort and effortless style for any occasion.",
  },
];

export default popular_men;
