import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const CounterButtons = () => {
  const [count, setCount] = useContext(CounterContext)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0 ) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default CounterButtons
