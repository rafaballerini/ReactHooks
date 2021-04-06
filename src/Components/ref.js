import React, { useRef } from 'react';

export default function InputTexto() {
    const inputRef = useRef(null);
    const focaInput = () => {
      inputRef.current.focus();
    };
    return (
      <>
        <input ref={inputRef} type="text" />
        <button onClick={focaInput}>Dá foco no input</button>
      </>
    );
  }