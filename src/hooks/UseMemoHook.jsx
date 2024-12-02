import React, { useState, useMemo } from "react"

const UseMemoHook = () => {
  const [count, setCount] = useState(0)
  const [otherState, setOtherState] = useState(0)

  const expensiveComputation = (num) => {
    console.log("Computing...")
    for (let i = 0; i < 10000; i++) {}
    return num * 2
  }

  const memoizedResult = useMemo(() => expensiveComputation(count), [count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Memoized Result: {memoizedResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  )
}

export default UseMemoHook
