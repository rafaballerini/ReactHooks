import './App.css';
// import PageInputState from './Components/state'; //useState
// import PageInputEffect from './Components/effect'; //useEffect
// import PageInputReducer from './Components/reducer'; //useReducer
// import PageInputCallback from './Components/callback'; //useCallback
// import PageInputMemo from './Components/memo'; //useMemo
// import InputText from './Components/ref'; //useRef
// import InputTextoImperative from './Components/imperativeHandle'; //useImperativeHandle
// import {useRef} from 'react'; //useImperativeHandle
// import PageInputLayoutEffect from './Components/layoutEffect'; //useLayoutEffect
// import PageInputDebugValue from './Components/debugValue'; //useDebugValue
// import PageInputContext, {PageContextProvider} from './Components/context'; //useContext

function App() {

  // const inputRef = useRef(null); //as próximas 4 linhas são referentes ao useImperativeHandle
  // const focaInput = () => {
  //   inputRef.current.focus();
  //   inputRef.current.console();
  // };

  return (
    <div className="App">
      {/*<PageInputState/>*/} {/*useState*/}
      {/*(<PageInputEffect />)/} {/*useEffect*/}
      {/*<PageInputReducer/>*/} {/*useReducer*/}
      {/*<PageInputCallback/>*/} {/*useCallback*/}
      {/*<PageInputMemo />*/} {/*useMemo*/}
      {/*(<InputText/>)*/} {/* useRef */}
      {/*<InputTextoImperative ref={inputRef}/> 
      <button className="focusButton" onClick={focaInput}>Dá foco no input</button> {/*useImperativeHandle*/}
      {/*<PageInputLayoutEffect/>*/}  {/*useLayoutEffect*/}
      {/*<PageInputDebugValue/>*/} {/*useDebugValue*/}
      {/*<PageContextProvider><PageInputContext/></PageContextProvider>*/} {/*useContext*/}
    </div>
  );
}

export default App;