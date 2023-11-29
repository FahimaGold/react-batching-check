import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [flag, toggleFlag] = useState(0);
  
  const handleClick = () => {
    setCount( (prevCount) => prevCount + 1);
    toggleFlag ((prevFlag) => prevFlag === 0? 1: 0);
  }
 
  return (
    <>
      <button onClick={handleClick}>counter-flag</button>
      <p>Counter: {count}</p>
      <p>flag: {flag}</p>
    </>
  )
}

export default App
