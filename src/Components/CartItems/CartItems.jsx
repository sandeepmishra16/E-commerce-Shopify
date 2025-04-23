import React, { useContext } from "react";
import "./CartItems.css";
import { CiCircleRemove } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (

    <div className="cartItems">
      <div className="cartitems-format-main">
        <div className="single">Products</div>
        <div className="single">Title</div>
        <div className="single">Price</div>
        <div className="single">Quantity</div>
        <div className="single">Total</div>
        <div className="single">Remove</div>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div className="cartItems-format cartitems-format-main">
                <img src={e.image} alt="" width="120px" height="120px"/>
                <div className="single">{e.name}</div>
                <div className="single"><FaRupeeSign />{e.new_price}</div>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <div className="single"><FaRupeeSign />{e.new_price * cartItems[e.id]}</div>
                <CiCircleRemove onClick={() => removeFromCart(e.id)} className="single"/>
              </div>
              <hr />
            </>
          );
        }
        return null;
      })}


      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <div className="cartitems-total-price">
                <FaRupeeSign size={20}/> {getTotalCartAmount()}
              </div>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <div className="cartitems-total-price">
                <FaRupeeSign size={20}/> {getTotalCartAmount()}
              </div>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>


        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CartItems;
