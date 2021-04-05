import React, { useCallback, useState, useMemo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

export default function PageInputMemo() {
  const [state, setState] = useState(initialState);
  const [state2, setState2] = useState(initialState);

  const increment = useCallback(()=>{
    setState({count: state.count + 1 })
  },[state])
  const decrement = useCallback(()=>{
    setState({count: state.count - 1 })
  },[state])
  const handleChange = useCallback((event)=>{
    setState({count: Number(event.target.value)})
  },[state])

  const memorizedValue = useMemo(() => {
    if(state.count > state2.count){
      return 'Maior'
    }else if(state.count < state2.count){
      return 'Menor'
    }else{
      return 'Igual'
    }
  }, [state, state2])

  return (
    <div>
      <h1>{memorizedValue}</h1>
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
