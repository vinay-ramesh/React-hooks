#React Hooks and its utilization

Hooks are basically a simple JavaScript functions that we can use to isolate the reusable part from a functional component
We cannot put them inside the loops
They will get call always in the same order and mentioned on top of the Scope

1. UseState
   Helps to store the data and comes with Initial value of the state variable along with its upadter funtion
   **Syntax**
   const [count, setCount] = useState(0)

   - Initial value of count is 0, setCount is its updater function
   - For every state updation, it causes the re-render of the whole component
   - Always use "functional" way of state updation --> This helps to access the previous state value and can do the modification quiet easily.
   - For every re-render the state get the initial value and after the updation of the state the updated value get stored inside the state
   - Updating state values which are objects --> For this use the spread operator and access the prop of the stateVaribale to update
     Ex: setState((prevState) => {
     return {...prevState, [property]: [updatedPropVal]}
     })
   - Function version of initialising the state -- this helps to avoid the useState initial value loading whenever component re-renders.

     const runExpensiveFunction = () => console.log("Expensive func");
     const [value, setValue] = useState(() => runExpensiveFunction())

   - ref: **https://blog.webdevsimplified.com/2020-04/use-state/**

2. UseEffect
   Helps to fetch or load the data to component when its mounted. And also detects the sideEffects happend in the component.  
   **Syntax**  
   useEffect(() => {

   return () => {  
   console.log("Cleanup function)  
   }  
   }, [stateVaribale])

   1. useEffect with no dependency array --> callback invoked infinite times
   2. useEffect with empty dependency array --> callback invoked only once after the component mounting
   3. useEffect with dependency array + stateVariable inside it --> callback invoked only once after the component mounting and once the sideEffect is observed.

   - Whenever state variable or props mentioned inside dependency array changes, useEffect call back function invoked.
   - UseEffect function runs - after every render and after every side effect
   - Cleanup function is the returned function of useEffect callback and it is called during component unmounting phase.

     useEffect(() => {
     console.log("Hello)
     return () => {
     console.log("Cleanup function)
     }
     }, [stateVaribale])

     So During the initial load of the screen - Hello printed.
     When stateVaribale changed,
     Cleanup function printed due to cleanup function execution and
     then Hello get printed.

     Every time when the useEffect Runs, cleanup fun runs first to cleaup whatevr we did for the last time and then the callBack fun executed.

   - ref: **https://blog.webdevsimplified.com/2020-04/use-effect/**

3. UseContext
   React Context is a way to manage state globally.

   - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
   - State should be held by the highest parent component in the stack that requires access to the state.
     **Syntax**
     import { createContext } from "react";

     const UserContext = createContext()
     <ThemeContext.Provider value={darkTheme}>
     <Child1>
     <Child2>
     </ThemeContext.Provider>

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
