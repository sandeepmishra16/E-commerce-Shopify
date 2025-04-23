import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaRupeeSign, FaStar, FaStarHalf } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            height="300px"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStar size={30} />
          <FaStarHalf size={30} />

          <h2>(130)</h2>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
          <FaRupeeSign /> {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
          <FaRupeeSign /> {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addTocart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
