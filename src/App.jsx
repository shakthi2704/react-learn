import React, { useContext } from "react"
import UseStateHook from "./hooks/UseStateHook"
import { UseEffectHook } from "./hooks"
import { ThemeContext } from "./hooks/ThemeProvider" // Import ThemeContext

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) // Consume ThemeContext

  return (
    <div
      className={`min-h-screen p-10 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Toggle Theme Button */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Toggle Theme
      </button>

      {/* UseStateHook Section */}
      <div className="w-full p-4 m-2 border-2">
        <div>
          <UseStateHook />
        </div>
      </div>

      {/* UseEffectHook Section */}
      <div className="w-full p-4 m-2 border-2">
        <div>
          <UseEffectHook />
        </div>
      </div>
    </div>
  )
}

export default App
