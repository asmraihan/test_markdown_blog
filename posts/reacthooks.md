---
title: "React hooks simplified"
subtitle: "React useState and useEffect hooks explained in simple term with example"
socialImage: images/reacthooksdalle2.png
date: "2023-04-02"
---

React hooks were introduced in React version 16.8. The main purpose was to make functional components more useful .
Hooks allows us to change the state of react components (useState) or performing an after effect when changes occur in component state without the need of class component.

## RULES of react hooks,

1.React hooks can only be used in react functions.
2.React hooks must be called at the top level.


># useState in hook in react :

## First what is state in react?
- A built in react object
- Can be used to store data about components.
- States are mutable, meaning their value can change

The useState() hook allows us to have state variables in the React functional component. It takes one argument which is the initial state and returns a state value and a function to update it.


***Example***
```js
const [count, setCount] = useState(0)
const increaseCount = () =>{
    setCount(count + 1)
};
```

## 5 common usage of useState() ,
1. Counter
2. State management.
3. Conditional rendering.
4. Toggler (ON/OFF,True/False)
5. Store api.





># useEffect in hook in react :

## What are side effects in react?
- Actions which are performed with the outside world
- Unpredictable because it can depend upon various things outside of react scope.


useEffect() hook accepts 2 arguments:

``` js
    useEffect(callback[, dependencies]);
``` 
Callback is a function that contains the side-effect logic. callback is executed right after the DOM update.
dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

***Example***
``` js
  useEffect(() => {
    setTimeout(() => {
    setCount((count) => count + 1);
   }, 1000);
  return function cleanup() {
    // Side-effect cleanup...
   };
},[dependencies]);
```

## Common usage of useEffect() ,

1. Making request to an api for data
2. Performs asynchronous tasks  
3. To interact with browser api to manipulate DOM directly.
4. Reading data from local storage

## What is the use Effect cleanup function?

- The useEffect cleanup allows us to tidy up our code before our component unmounts.

- When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.

- The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors. 
