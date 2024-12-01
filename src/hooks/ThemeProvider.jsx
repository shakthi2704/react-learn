// src/ThemeProvider.jsx
import React, { createContext, useState } from "react"

// Create ThemeContext
const ThemeContext = createContext()

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Export Context and Provider
export { ThemeContext, ThemeProvider }
