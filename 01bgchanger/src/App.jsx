import { useState } from 'react'

import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("olive")

  return (
    <>
  <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-3 rounded-full">
          <button
            onClick={() => setBgColor("red")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("green")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("blue")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button 
          onClick={() => setBgColor("maroon")}
          className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold" style={{backgroundColor:"maroon"}}>
            Maroon
          </button>
          <button
            onClick={() => setBgColor("olive")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold"
            style={{ backgroundColor: "olive" }}>Olive</button>
            <button 
            onClick={() => setBgColor("black")}
            className="outline-none px-6 py-2 rounded-full text-white shadow-md font-semibold" style={{backgroundColor:"black"}}>Black</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
