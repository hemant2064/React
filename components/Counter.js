import { useState } from "react";

const Counter = () => {
    const [count,setCount]=useState(0);
//   var count = 1;
  function Add() {
    setCount(count+1)
    // count++;
    // console.log(count)
  }

  return (
    <div>
      <button onClick={Add}> {count} </button>

      <h1>hi this is react Component</h1>
    </div>
  );
};
export default Counter;
