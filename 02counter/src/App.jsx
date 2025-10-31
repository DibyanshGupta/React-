import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    if(counter <10 ){counter = counter + 1;
    setCounter(counter)}

    // setCounter(counter+1)   // we can do this also inplace of above two lines
    console.log("value added ", Math.random());
  }

  const removeValue = () => {
    if(counter  > 0)setCounter(counter-1);
    console.log("value removed ", Math.random())

    // if we do setCounter(counter-1) multiple times it will still get updated for 1 time as react will consider it as same state running multiple times
    // if we want to see the changes do as follows
    // setCounter(prevCounter => prevCounter -1)
    // setCounter(prevCounter => prevCounter -1)
    // setCounter(prevCounter => prevCounter -1)
    // setCounter(prevCounter => prevCounter -1)

    // if you do as above counter value will be decreased by 4 
  }

  return (
    <>
      <h1>Counter Game</h1> <br />
      <h2>Counter Value (0-10) : {counter}</h2>

      <button onClick={addValue}>add value</button> <br /><br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
