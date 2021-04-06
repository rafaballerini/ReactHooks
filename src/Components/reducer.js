import React, { useReducer } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return action.newState;
  }
}

export default function PageInputReducer() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="content">
      <button onClick={() => dispatch({ type: "decrement" })}>
        <FiMinus />
      </button>
      <input
        type="number"
        step="1"
        value={state}
        onChange={(evento) => {
          dispatch({
              newState: Number(evento.target.value)
          });
        }}
      />
      <button onClick={() => dispatch({ type: "increment" })}>
        <FiPlus />
      </button>
    </div>
  );
}
