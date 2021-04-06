import React, { useCallback, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function PageInputCallback() {
  const [state, setState] = useState(0);

  const increment = useCallback(()=>{
    setState(state + 1)
  },[state])
  const decrement = useCallback(()=>{
    setState(state - 1)
  },[state])
  const handleChange = useCallback((event)=>{
    setState(Number(event.target.value))
  },[state])

  return (
    <div className="content">
      <button onClick={decrement}>
        <FiMinus />
      </button>
      <input
        type="number"
        step="1"
        value={state}
        onChange={handleChange}
      />
      <button onClick={increment}>
        <FiPlus />
      </button>
    </div>
  );
}
