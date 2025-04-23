import React from "react";
import "./BredCrums.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Bredcrums = (props) => {
  const { product } = props;

  return (
    <div className="bredcrums">
      Home <FaLongArrowAltRight /> SHOP <FaLongArrowAltRight />
      {product.category} <FaLongArrowAltRight /> {product.name}
    </div>
  );
};

export default Bredcrums;
