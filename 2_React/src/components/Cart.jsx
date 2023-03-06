import { useReducer } from "react";

const Cart = () => {
  function reducer(state, action) {
    // console.log(action)
    switch (action.type) {
      case "INC":
        return { count: state.count + 1, showText: state.showText };
      case "Toggle":
        return { count: state.count, showText: !state.showText };
      default:
        state;
    }
  }
  const [state, dispatc] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>This is Cart</h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatc({ type: "INC" });
          dispatc({ type: "Toggle" });
        }}
      >
        click
      </button>
      {state.showText && <h1>This is text</h1>}
    </div>
  );
};
export default Cart;
