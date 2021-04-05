import React, { useRef } from 'react';

export default function InputTexto() {
    const inputEl = useRef(null);
    const focaInput = () => {
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={focaInput}>Dá foco no input</button>
      </>
    );
  }