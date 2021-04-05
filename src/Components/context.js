import React, { useCallback, useState, useContext, createContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };
const Context = createContext()

export function PageContextProvider({children}) {
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
        <Context.Provider value={{state, increment, decrement, handleChange}}>{children}</Context.Provider>
    )
}

export default function PageInputContext() {

  const {state, increment, decrement, handleChange} = useContext(Context)

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
