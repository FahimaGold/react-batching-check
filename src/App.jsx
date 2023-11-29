import { useState } from 'react'
import useRendersCount from './hooks/useRendersCount';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [flag, toggleFlag] = useState(0);
  const rendersCounter = useRendersCount();
  const handleClick = () => {
    setCount( (prevCount) => prevCount + 1);
    toggleFlag ((prevFlag) => prevFlag === 0? 1: 0);
  }
 
  return (
    <>
      <button onClick={handleClick}>counter-flag</button>
      <p>Counter: {count}</p>
      <p>flag: {flag}</p>
      <p>Renders times: {rendersCounter}</p>
    </>
  )
}

export default App
