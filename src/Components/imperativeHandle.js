import React, { useRef, useImperativeHandle, forwardRef} from 'react';

function InputTextoImperative(props, ref) {
    
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));

    return (
        <input ref={inputRef} type="text" />
    );
  }

  export default forwardRef(InputTextoImperative);