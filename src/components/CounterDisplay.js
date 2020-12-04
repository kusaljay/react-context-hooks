import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const CounterDisplay = () => {
  const [count] = useContext(CounterContext)

  return <h3>Count: {count}</h3>
}

export default CounterDisplay
