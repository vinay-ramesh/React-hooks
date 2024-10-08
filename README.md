#React Hooks and its utilization

Hooks are basically a simple JavaScript functions that we can use to isolate the reusable part from a functional component
We cannot put them inside the loops
They will get call always in the same order and mentioned on top of the Scope

1. UseState
   Helps to store the data and comes with Initial value of the state variable along with its upadter funtion
   **Syntax**

   ```javascript
   const [count, setCount] = useState(0);
   ```

   - Initial value of count is 0, setCount is its updater function
   - For every state updation, it causes the re-render of the whole component
   - Always use "functional" way of state updation --> This helps to access the previous state value and can do the modification quiet easily.
   - For every re-render the state get the initial value and after the updation of the state the updated value get stored inside the state
   - Updating state values which are objects --> For this use the spread operator and access the prop of the stateVaribale to update

   ```javascript
   Ex: setState((prevState) => {
     return { ...prevState, [property]: [updatedPropVal] };
   });
   ```

   - Function version of initialising the state -- this helps to avoid the useState initial value loading whenever component re-renders.

   ```javascript
   const runExpensiveFunction = () => console.log("Expensive func");
   const [value, setValue] = useState(() => runExpensiveFunction());
   ```

   - ref: **https://blog.webdevsimplified.com/2020-04/use-state/**

2. UseEffect
   Helps to fetch or load the data to component when its mounted. And also detects the sideEffects happend in the component.  
   **Syntax**

   ```JSX

   useEffect(() => {
    console.log("Function logic")
    return () => {
      console.log("Cleanup function)
    }
   }, [])

   ```

   1. useEffect with no dependency array --> callback invoked infinite times
   2. useEffect with empty dependency array --> callback invoked only once after the component mounting
   3. useEffect with dependency array + stateVariable inside it --> callback invoked only once after the component mounting and once the sideEffect is observed.

   - Whenever state variable or props mentioned inside dependency array changes, useEffect call back function invoked.
   - UseEffect function runs - after every render and after every side effect
   - Cleanup function is the returned function of useEffect callback and it is called during component unmounting phase.

   ```JSX

    useEffect(() => {
     console.log("Hello)
     return () => {
     console.log("Cleanup function)
     }
    }, [stateVaribale])

   ```

   So During the initial load of the screen - Hello printed.
   When stateVaribale changed, Cleanup function printed due to cleanup function execution and then Hello get printed.

   Every time when the useEffect Runs, cleanup fun runs first to cleaup whatevr we did for the last time and then the callBack fun executed.

   - ref: **https://blog.webdevsimplified.com/2020-04/use-effect/**

3. UseContext
   React Context is a way to manage state globally.

   - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
   - State should be held by the highest parent component in the stack that requires access to the state.
     **Syntax**

     ```JSX

     import { createContext } from "react";

     const UserContext = createContext()
     <ThemeContext.Provider value={darkTheme}>
        <Child1>
        <Child2>
     </ThemeContext.Provider>

     ```

   1. createContext() --> Helps to create the context
   2. Provider --> Helps to wrap the Nested Components <Child1> & <Child2>
   3. value --> prop which shares the state variable declared in parent among its child
   4. <ThemeContext.Consumer>
      <ClassChild1 JSX>
      </ThemeContext.Consumer>
      ThemeContext.Consumer --> Wrapper for Class Based Child Component JSX
   5. In functional based child components we use hook --> known as useContext() in order to access the values from parent
      const darkTheme = useContext(ThemeContext); --> returned value is the state variables mentioned in parent component

   - ref: **https://blog.webdevsimplified.com/2020-06/use-context/**

4. useRef

   - useRef returns the value which is similar to the useState and persists the value of state between the renders of the component
   - useRef values does not cause the re-render when it get updated.
     **Syntax**

   ```javascript
   const myCount = useRef(0);
   console.log(myCount); //{current: 0}
   ```

   - useRef comes with object which has prop **current** which holds the initial value defined in useRef initialisation.
   - This also helps to get the reference of DOM elements through its ref attribute.

   ```JSX
   const inputRef = useRef()

   <input ref={inputRef}/>
   ```

   -ref: **https://blog.webdevsimplified.com/2020-05/use-ref/**

5. useMemo

   - useMemo basically stands for memoization which essentially idea of caching the value, hence we dont need to recompute the value every single time.
     **Syntax**

   ```javascript
   const [number, setNumber] = useState(0);
   const [dark, setDark] = useState(false);
   const doubleNumber = useMemo(() => {
     return slowFunction(number);
   }, [number]);
   ```

   - Here **number** is the dependency variable, so whenever number changes, then only slowFuction calls, whenever **dark**(another state varibale) updated, component again re-rendered and useMemo helps to send the memoised value of slowFunction.
   - So useMemo function calls on every render of the component and this stores the returned value in a memory. This sometimes causes the performance and memory overheads.
   - **Referencial Equality** - When you start to compare two variables of object datatype(may be an arrays or objects type) in JS, there will always be a comparision of reference of those two objects
   - Whenever function/component runs every time, new reference for the object is created, even though the values within the objects are never updated. Hence we should make use of useMemo inorder to avoid the **Referencial Equality**.

   ```javascript
   const themeStyles = useMemo(() => {
     return {
       backgroundColor: dark ? "black" : "white",
       color: dark ? "white" : "black",
     };
   }, [dark]);
   ```

   - useMemo in Nutshell:
     - useMemo is used with expensive functions in order to stop its execution every time whenever component re-rendered, only the function runs when inputs/parameter values are changed.
     - useMemo helps to update the reference of the object whenever the contents of the object changed, instead of updating in every single render.

   --ref: **https://blog.webdevsimplified.com/2020-05/memoization-in-react/#usememo**

6. useCallback

   - useCallback hook is generally used with functions which also works as useMemo. useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
     **Syntax**

   ```javascript
   const [number, setNumber] = useState(0);
   const [dark, setDark] = useState(false);
   const getItem = useCallback(() => {
     return [number, number + 1, number + 2];
   }, [number]);
   ```

   - On every component render, getItem re-created and called. But after using useCallback, useCallback recreates the getItem function only when _number_ changes. _number_ is the input here for getItem function.

- Difference between useMemo and useCallback is,

  - useCallback's first varible, ie: the arrow function will be the value of _getItem_ in above example.

  ```javascript
  const getItem = useMemo(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  ```

  - If we use the useMemo instead of useCallback, then value of _getItem_ will be > [number, number + 1, number + 2]; ie: useMemo returns the value of the arrow function(first parameter for useMemo).

  --ref: **https://blog.webdevsimplified.com/2020-05/memoization-in-react/#usecallback**

### Top 6 React Hook Mistakes Beginners Make

--ref: **https://www.youtube.com/watch?v=GGo3MVBFr1A**

Tips to avoid the mistakes

1. Use useRef() instead of useState() hook, inorder to avoid the unnecessary re-rendering of the component
2. Use functional way of updating the state in useState setFunction.
3. Asynchronous state updation --> To get the updated state value instantly, utlise useEffect hook and mention the state varibale in dependency array.
4. Avoid unnecessary useEffects and its dependency variables.
5. Avoid Referential Equality Mistakes. [2 objects with same properties are never be equal to each other] In this situation, useMemo hook can be used in order to keep track of any changes happening with the objects.
6. Abort the fetch requests
   Scenario is, when you fire a same API request multiple times, each request will take its own amount of time to fetch the data, hence the data returning in the last response will reflect in UI. Hence use the useEffect's **Clean-up** function to abort the calls whenever fetch URL changes rapidly.
   Ex: Best example is Pagination: Updating limit and offset

```javascript
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    const controller = new AbortController();
    try {
      const result = await axios.get("foo/bar", { signal: controller.signal });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  fetchData();

  // Cleanup Function
  return () => {
    contorller.abort();
  };
}, []);
```
