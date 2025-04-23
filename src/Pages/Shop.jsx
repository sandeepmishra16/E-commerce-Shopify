import React from "react";
import Hero from "../Components/Hero/Hero";
import PopularWomen from "../Components/PopularWomen/PopularWomen";
import Offers from "../Components/Offers/Offers";
import PopularMen from "../Components/PopularMen/PopularMen";
import Newsletter from "../Components/NewsLetter/Newsletter";
import PopularKids from "../Components/PopularKids/PopularKids";


const Shop = () => {
  return (
    <div>
      <Hero />
      <PopularWomen />
      <PopularMen />
      <Offers />
      <Newsletter />
      <PopularKids />
    </div>
  );
};

export default Shop;
