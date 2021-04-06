import React, { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function PageInputEffect() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state)
    //return
  }, [state])

  function increment(){
    setState(state + 1)
  }
  function decrement(){
    setState(state - 1)
  }
  function handleChange(event){
    setState(Number(event.target.value))
  }

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
