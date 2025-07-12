import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement ={
//   type :'a',
//   props:{
//       href:'https://www.google.com',
//       target:'_blank',
//   },
//   children:'click me to visit google'
// }

const anotherUser="chai aur react"
// react element creation
const reactElement=React.createElement(
  'a',
  {
    href:'www.google.com',
    target:'_blank',
    anotherUser
  },
  'Visit sk'
 
)
// const anotherElement=(
//   <a href="www.google.com" target="_blank">Visit  krle Google</a>
// )




createRoot(document.getElementById('root')).render(
  reactElement,
 <>
  
  
  // anotherElement
  <App/>
  // <MyApp/>

 </>
    
    
    
  
)
