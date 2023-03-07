// import { useReducer} from "react";

// const Cart = () => {
//   function reducer(state, action) {
// console.log(action)
//     switch (action.type) {
//       case "INC":
//         return { count: state.count + 1, showText: state.showText };
//       case "Toggle":
//         return { count: state.count, showText: !state.showText };
//       default:
//         state;
//     }
//   }
//   const [state, dispatc] = useReducer(reducer, { count: 0, showText: true });
//   return (
//     <div>
//       <h1>This is Cart</h1>
//       <h2>{state.count}</h2>
//       <button
//         onClick={() => {
//           dispatc({ type: "INC" });
//           dispatc({ type: "Toggle" });
//         }}
//       >
//         click
//       </button>
//       {state.showText && <h1>This is text</h1>}
//     </div>
//   );
// };
// export default Cart;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItems from "./FoodItems";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          color: "#ffffff",
          fontFamily: "Arial",
          margin: "2rem",
        }}
      >
        Cart Items
      </h1>
      <button className="clear-btn" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="food-wrapper">
        {cartItems.map((item) => (
          <FoodItems {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
