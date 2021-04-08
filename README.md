# React Hooks <img src="./public/React.svg.png" width="150px" style="position: absolute; right: 10px">

Entendendo como funcionam alguns Hooks do React
<hr>

### Como rodar o projeto:

**Você pode clonar o projeto e rodá-lo localmente seguindo os passos abaixo**

1. `git clone https://github.com/rafaballerini/ReactHooks.git` para clonar o projeto
2. `yarn` para instalar as dependências do projeto
3. `yarn start`
4. Acessar [http://localhost:3000](http://localhost:3000) no navegador

### Como testar cada um dos hooks:
1. Abra o arquivo `App.js`. É possível perceber que existem várias linhas comentadas, tanto na parte de importações, quando dentro da função.
2. Descomente a importação referente ao hook que deseja testar e também a linha dentro da função (há outro comentário no final da linha indicando a qual hook ela pertence).

<hr>

## Explicação de cada Hook:

### useState
É uma função para controle de estado:
- **recebe um parâmetro** (valor inicial desse estado) 
- **retorna uma lista com 2 variáveis** (a primeira é o valor do estado em si e a segunda é a função que atualiza esse estado)

```js
const [state, setState] = useState(0);
```

O `setState` será usado para atualizar os valores do estado, por exemplo:

```js
  function increment(){
    setState(state + 1)
  }
```

### useEffect
- **recebe dois parâmetros:** uma função e uma lista de dependências. Quando algum elemento dessa lista for alterado, a função é executada automaticamente.
- **o retorno da função pode ser uma função.** Se for, ela será executada quando o componente for desmontado

```js
  useEffect(() => {
    console.log(state)
  }, [state])
```

Quando a lista de dependências estiver vazia, a função será executada no momento que o componente for renderizado.
É executado de forma assíncrona depois de uma renderização na tela.

### useContext
É uma forma de mais de um componente ter acesso a uma funcionalidade/lógica do programa.
Pra isso é criado uma `const Context` usando o `React.createContext`.

```js
const Context = createContext()
```

Criamos um componente que será o provedor dos dados que tem no nosso context.

```js
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
    <Context.Provider value={{
        state, 
        increment, 
        decrement, 
        handleChange}
        }>
        {children}
    </Context.Provider>
  )
}
```
Note que esse `Context.Provider` recebe a propriedade `children` e utiliza essa propriedade para representar todos os componentes.

```js
<PageContextProvider>
    <PageInputContext/>
</PageContextProvider>
```

`PageInputContext` é um componente filho de `PageContextProvider` e para acessar as propriedades que ele envia é preciso chamar o `useContext` passando como parâmetro o `Context`, criado com o `React.createContext`

```js
export default function PageInputContext(){
    const {state, increment, decrement, handleChange} = useContext(Context)
}
```

### useReducer
No `useState` a lógica de atualização de dados fica dentro de onde ele foi chamado, já no `UseReducer` a lógica ficará em uma função, como essa `reducer` abaixo.

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return action.newState;
  }
}
```

- **recebe até 3 parâmetros:** o primeiro é a função que altera o estado, o segundo é o estado inicial e o terceiro é uma função init caso seja necessário executar alguma coisa no momento que o estado é criado
- **retorna uma lista com 2 elementos:** o valor do estado em si e o dispatch, que é a forma como iremos chamar a função para atualizar o estado, ela que dispara a chamada da função reducer

```js
const [state, dispatch] = useReducer(reducer, 0);
```

Normalmente é melhor utilizar o `useReducer` quando se tem uma lógica complexa no state que envolve múltiplos subvalores ou quando o próximo state depende do anterior. 
Ele também permite otimizar performance para alguns componentes, pois você pode passar um `dispatch` ao invés de `callbacks`.

```js
<button onClick={() => dispatch({ type: "decrement" })}>
```

### useCallback
Para cada alteração no valor do `state`, criamos um `callback` diferente: `increment`, `decrement` e `handleChange`
- **recebe 2 parâmetros:** uma função e uma lista de dependências. Essa função é [memorizada](https://en.wikipedia.org/wiki/Memoization) e apenas será rerenderezida quando um dos valores da lista de dependências for alterado.

```js
const increment = useCallback(()=>{
    setState(state + 1)
},[state])

const decrement = useCallback(()=>{
    setState(state - 1)
},[state])

const handleChange = useCallback((event)=>{
    setState(Number(event.target.value))
},[state])
```

A função não ser recarregada toda hora facilita muito o processamento.

### useMemo
Assim como o `useCallback`:
- **recebe 2 parâmetros:** uma função e uma lista de dependências. 

```js
const memorizedValue = useMemo(() => {
    if(state > state2){
      return 'Maior'
    }else if(state < state2){
      return 'Menor'
    }else{
      return 'Igual'
    }
}, [state, state2])
```

O valor de retorno da função é [memorizado](https://en.wikipedia.org/wiki/Memoization) e apenas será recarregado quando um dos valores da lista de dependências forem alterados.

### useRef
- **retorna a referência de um objeto mutável** e que existirá durante toda a vida do componente. 

```js
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
```

Para acessar o objeto é necessário usar a propriedade `.current` do `useRef`.

### useImperativeHandle
Utilizado para passar um componente `ref` para um componente pai, devendo ser combinado com o `fowardRef`.

```js
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
      <div className="content">
        <input ref={inputRef} type="text" />
      </div>
    );
}

export default forwardRef(InputTextoImperative);
```

Você pode colocar um botão em `App.js` (componente pai) e ele chamar a função do componente filho.

```js
<InputTextoImperative ref={inputRef}/> 
<button className="focusButton" onClick={focaInput}>Dá foco no input</button>
```

### useLayoutEffect
É muito parecido com o `useEffect`, porém é disparado de forma **síncrona** após todas as mudanças no DOM e antes de aparecer qualquer coisa na tela. 

```js
useLayoutEffect(() => {
    console.log('layout');
}, [])
```

É preferível utilizar o `useEffect` para evitar bloqueio de atualizações visuais.

**Quando usar?** 
Você vai perceber que o elemento ficará piscando/executando várias vezes quando utilizar o `useEffect`, nesse caso o ideal é alterar para `useLayoutEffect`.

### useDebugValue
Utilizado em conjunto com a extensão [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) para mostrar o conteúdo de algum estado, como se fosse um `console.log`.

```js
function useAnalyzeState(state) {
  useDebugValue(`Valor do state = ${state}`);
  return state;
}
```

Como o próprio nome diz, é utilizado para fazer debug.
