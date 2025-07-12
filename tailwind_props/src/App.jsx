// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App() {
  // let myObj={
  //   username:"wackybot",
  //   age:20
  // }
  // const [count, setCount] = useState(0)
// let newArray=[1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h1 className="bg-green-400 text-3xl text-center font-bold underline">
      Hello world!
      <Card channel="wackybotaurcode" btnText="click Me" />
      {/* <Card channel="wackybot aur code " somObj={newArray}/> */}
      <Card channel="memerbot" btnText="visit me"/>
    </h1>

    
    </>
  )
}

export default App
