import React, { useState, createContext } from 'react'

const CounterContext = createContext()

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  )
}

export { CounterContext as default, CounterContextProvider }