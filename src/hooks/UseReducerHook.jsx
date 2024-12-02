import React, { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
const UseReducerHook = () => {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="p-4">
      <h1 className="text-xl">Count: {state.count}</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md m-2"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md m-2"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md m-2"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  )
}

export default UseReducerHook
