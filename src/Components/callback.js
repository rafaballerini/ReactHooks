import React, { useCallback, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

export default function PageInputCallback() {
  const [state, setState] = useState(initialState);

  const increment = useCallback(()=>{
    setState({count: state.count + 1 })
  },[state])
  const decrement = useCallback(()=>{
    setState({count: state.count - 1 })
  },[state])
  const handleChange = useCallback((event)=>{
    setState({count: Number(event.target.value)})
  },[state])

  return (
    <div>
      <button onClick={decrement}>
        <FiMinus />
      </button>
      <input
        type="number"
        step="1"
        value={state.count}
        onChange={handleChange}
      />
      <button onClick={increment}>
        <FiPlus />
      </button>
    </div>
  );
}
