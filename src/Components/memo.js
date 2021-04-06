import React, { useCallback, useState, useMemo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function PageInputMemo() {
  const [state, setState] = useState(0);
  const [state2] = useState(3);

  const increment = useCallback(()=>{
    setState(state + 1)
  },[state])
  const decrement = useCallback(()=>{
    setState(state - 1)
  },[state])
  const handleChange = useCallback((event)=>{
    setState(Number(event.target.value))
  },[state])

  const memorizedValue = useMemo(() => {
    if(state > state2){
      return 'Maior'
    }else if(state < state2){
      return 'Menor'
    }else{
      return 'Igual'
    }
  }, [state, state2])

  return (
    <>
      <div>
        <h1>{memorizedValue}</h1>
        <h1>state2: {state2}</h1>
      </div>
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
    </>
  );
}
