import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)

  const addValue=()=>{
  // counter=counter+1;
  setCounter(prevCounter=>prevCounter+1) //setcounter is a function which is used to update the value of counter and it will re-render the component and update the value of counter to the new value which is passed in the setCounter function. This function hav a callback as well.
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  console.log("clicked", counter);
}
const removeValue=()=>{
  setCounter(counter-1)
  console.log("clicked", counter-1);
}
if(counter<0){
    setCounter(0)
  
}
// if(counter>20){
//   setCounter(20)
// }
  return (
    <>
      <h1>chai react aur hooks</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button><br />
      <button onClick={removeValue}>decrease Value {counter}</button>

      <p>footer {counter} </p>
    </>
  )
}

export default App
