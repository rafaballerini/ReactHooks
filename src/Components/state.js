import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

export default function PageInputState() {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <button onClick={() => setState({count: state.count - 1})}>
        <FiMinus />
      </button>
      <input
        type="number"
        step="1"
        value={state.count}
        onChange={(evento) => {
          setState({
              count: Number(evento.target.value)
          });
        }}
      />
      <button onClick={() => setState({count: state.count + 1 })}>
        <FiPlus />
      </button>
    </div>
  );
}
