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
   5. In functional baseed child components we use hook --> known as useContext() in order to access the values from parent
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
