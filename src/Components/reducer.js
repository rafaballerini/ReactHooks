import React, { useReducer } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: action.newState };
  }
}

export default function PageInputReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>
        <FiMinus />
      </button>
      <input
        type="number"
        step="1"
        value={state.count}
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
