import React, { useState, useEffect, useLayoutEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

export default function PageInputLayoutEffect() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log('effect')
    //return
  }, [])

  useLayoutEffect(() => {
    console.log('layout');
    //return
  }, [])

  function increment(){
    setState({count: state.count + 1 })
  }
  function decrement(){
    setState({count: state.count - 1 })
  }
  function handleChange(event){
    setState({count: Number(event.target.value)})
  }

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
