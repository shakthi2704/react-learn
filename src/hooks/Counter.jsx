import React from "react"
import useStore from "../store"

const Counter = () => {
  const { count, increment, decrement } = useStore()

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button
        onClick={increment}
        className="px-4 py-2 m-2 bg-green-500 text-white rounded-md"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 m-2 bg-red-500 text-white rounded-md"
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
