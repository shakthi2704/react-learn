import React from "react"
import UseStateHook from "./hooks/UseStateHook"
import { UseEffectHook } from "./hooks"
const App = () => {
  return (
    <div className="p-10">
      <div className="w-full p-4 m-2 border-2">
        <div>
          <UseStateHook />
        </div>
      </div>
      <div className="w-full p-4 m-2 border-2">
        <div>
          <UseEffectHook />
        </div>
      </div>
    </div>
  )
}

export default App
