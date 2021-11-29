import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { ADD_MULTIPLE_TO_CART, TOGGLE_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import { useStore } from "../../utils/globalState";
import { QUERY_CHECKOUT } from "../../utils/queries";

const stripePromise = loadStripe(
  "pk_test_51Jz3E3ImJghqatoxgIZwAMgqpwKdV4HBgG2NblBbzI6QQ8FviL7RJj7GyCZ1esWD4eDphh95Zfdu8pSbFYtEb0AM00QDYqoPQu"
);

const Cart = () => {
  const [state, dispatch] = useStore();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calcTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="min-cart" onClick={toggleCart}>
        <span>{/* Kip insert your cart image here */}</span>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="close-btn" onClick={toggleCart}>
        [close]
      </div>
      <div>
        {state.cart.length ? (
          <div>
            <h2> Cart </h2>
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="cartTotal">
              <h3> Total: ${calcTotal()}</h3>

              <button onClick={submitCheckout}> Checkout! </button>
            </div>
          </div>
        ) : (
          <h2> Your Cart is Empty!</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
