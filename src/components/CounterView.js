import React from 'react'
import { CounterContextProvider } from '../context/CounterContext'
import CounterButtons from './CounterButtons'
import CounterDisplay from './CounterDisplay'

const CounterView = () => {
  return (
    <div className="small-container">
      <h1>Counter</h1>
      <CounterContextProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterContextProvider>
    </div>
  )
}

export default CounterView
