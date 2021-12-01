import React from "react";
import { useStore } from "../../utils/globalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "../../styles/feed.css";

function ProductItem(item) {
  const [state, dispatch] = useStore();

  const { image, name, _id, price, description, userName } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="post grey lighten-1">
      <img
        className="profile"
        src="https://i.ibb.co/9twjYxJ/00100l-PORTRAIT-00100-BURST20190919181515033-COVER-2.jpg"
        alt="Profile"
      ></img>
      <div>
        <h4>
          Kippo357 is selling {name} for ${price}
        </h4>
        <p>{description}</p>
        <button className="btn red buyBtn" onClick={addToCart}>
          $Buy It!
        </button>
      </div>
      <img
        className="gameImg"
        src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1o4d.png"
        alt="Game cover"
      ></img>
    </div>
  );
}

export default ProductItem;
