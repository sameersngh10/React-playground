import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [lenght,setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setChartAllowed] = useState(false);
  const [password, setpassword]=useState('');

  // useRef hook
  const passwordRef= useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    

    if(numberAllowed) str +='0123456789'
    if(charAllowed) str +='!@#$%^&*()_+=[]{}~'

    for (let i=1;i<=lenght;i++){
      const char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char); //concatenate
    }
    setpassword(pass);
  }, [lenght, numberAllowed, charAllowed, setpassword]);

  const copyPassworDtoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password).then(() => alert('Password copied to clipboard!'))
    ;
  },[password])
useEffect(()=>{
  passwordGenerator()
},[lenght, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700"> <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
<input type="text" value={password} className='outline-none w-full bg-white py-1 px-3' placeholder='password' ref={passwordRef} readOnly/>
<button onClick={copyPassworDtoclipboard} className='outline-none bg-blue-700 text-white px-3 py- py-0.5 shrink-0'>Copy</button>
       </div>
       <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100}
          value={lenght} className='cursor-pointer'
          onChange={(e)=>{setLenght(e.target.value)}}
           />
          <label >Lenght:{lenght}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
          <label >Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setChartAllowed((prev)=>!prev)}} />
          <label >characters</label>
        </div>
       </div>
       </div>
    </>
  )
}

export default App
