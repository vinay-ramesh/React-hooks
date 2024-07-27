#React Hooks and its utilization

Hooks are basically a simple JavaScript functions that we can use to isolate the reusable part from a functional component
We cannot put them inside the loops
They will get call always in the same order and mentioned on top of the Scope

1. UseState
   Helps to store the data and comes with Initial value of the state variable along with its upadter funtion

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
