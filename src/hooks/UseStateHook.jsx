import React, { useState } from "react"

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      [name]: value,
    })
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form>
        <div>
          <label
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></label>
        </div>
        <div>
          <label
            type="text"
            name="name"
            value={formData.email}
            onChange={handleChange}
          ></label>
        </div>
      </form>
    </div>
  )
}

export default UseStateHook
