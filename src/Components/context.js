import React, { useCallback, useState, useContext, createContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Context = createContext()

export function PageContextProvider({children}) {
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
    <Context.Provider value={{state, increment, decrement, handleChange}}>{children}</Context.Provider>
  )
}

export default function PageInputContext() {

  const {state, increment, decrement, handleChange} = useContext(Context)

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
