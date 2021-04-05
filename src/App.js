import './App.css';
import {useRef} from 'react';
// import PageInputReducer from './Components/reducer';
// import PageInputState from './Components/state';
// import PageInputMemo from './Components/memo';
// import PageInputEffect from './Components/effect';
// import InputText from './Components/ref';
// import InputTextoImperative from './Components/imperativeHandle';
// import PageInputLayoutEffect from './Components/layoutEffect';
// import PageInputDebugValue from './Components/debugValue';
import PageInputContext, {PageContextProvider} from './Components/context';

function App() {

  // const inputRef = useRef(null);
  // const focaInput = () => {
  //   inputRef.current.focus();
  // };

  return (
    <div className="App">
      {/* <PageInputMemo /> */}
      {/* <PageInputEffect /> */}
      {/* <InputText /> */}
      {/* <PageInputReducer/>*/}
      {/*<PageInputState/> */}
      {/* <InputTextoImperative ref={inputRef}/>
      <button onClick={focaInput}>Dá foco no input</button> */}
      {/* <PageInputLayoutEffect/> */}
      {/* <PageInputDebugValue/> */}
      <PageContextProvider><PageInputContext/></PageContextProvider>
    </div>
  );
}

export default App;
