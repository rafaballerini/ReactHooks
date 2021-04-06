import React, { useRef, useImperativeHandle, forwardRef} from 'react';

function InputTextoImperative(props, ref) {
    
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }, 
        console: () => {
          console.log('teste')
        }
      }));

    return (
        <input ref={inputRef} type="text" />
    );
  }

  export default forwardRef(InputTextoImperative);