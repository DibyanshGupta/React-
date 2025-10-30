import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
      <div>
        <h1>Custom App</h1>
      </div>
    )
}

// following way of creating react element will won't work as they may have different syntax from actual react element
/*
const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}
*/

const anotherElement  = (
  <a href="https://google.com" target = '_blank'> Visit Google</a>
)

const anotheruser = "Chai"

const reactElement = React.createElement(
    'a',
    {href:"https://google.com", target:'_blank'},
    'click me to visit google',
    anotheruser
)

createRoot(document.getElementById('root')).render(
    
    // <MyApp />

    // instead of using the above syntax we can use below syntax also as MyApp is a function but it is not a good practice
    // MyApp()

    // we can directly call react object or react element like as below
    // anotherElement

    // calling the react element 
    reactElement
)
