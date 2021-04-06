import React, { useRef } from 'react';

export default function InputTexto() {
    const inputRef = useRef(null);
    const focaInput = () => {
      inputRef.current.focus();
    };
    return (
      <div className="content refContent">
        <input ref={inputRef} type="text" />
        <button className="focusButton" onClick={focaInput}>Dá foco no input</button>
      </div>
    );
  }