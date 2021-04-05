import React, { useState, useEffect, useLayoutEffect, useDebugValue } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const initialState = { count: 0 };

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    useDebugValue(isOnline ? 'Online' : 'Offline');
  
    return isOnline;
  }

export default function PageInputDebugValue() {
  const [state, setState] = useState(initialState);

  useFriendStatus(state)

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
