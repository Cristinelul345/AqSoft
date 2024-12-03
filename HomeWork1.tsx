// ========================================================= 1.9. useState. useRef.


// npx create-react-app task1 --template typescript
// cd task1
// I added the examples to the files
// npm start
// npx tsc --noEmit

// or

// tsc --jsx react-jsx --noEmit HomeWork1.tsx (no compile)

// 2 hooks in react
// The useState hook is used to add state to a functional component. 
// In class components, you would use this.state and this.setState() to manage state, but with functional components, you use useState.


import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// const [state, setState] = useState(initialValue);
// state is the current state value.
// setState is the function you use to update the state.
// initialValue is the initial value of the state when the component first renders.




// The useRef hook is used to persist values across renders without causing a re-render when the value changes. 
// It's often used for accessing Document Object Model(HTML elements like <div>, <p>, <a>, <button>)
// elements directly or storing mutable values that don’t trigger re-renders when changed.


function FocusInput() {
  const inputRef = useRef(null); // Create a ref for the input element

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element and call its focus method
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

// const myRef = useRef(initialValue);
// myRef is the reference object that persists across renders.
// initialValue can be any value, but it is often null if you want to reference a DOM element.