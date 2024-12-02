import React from "react"
import useStore from "../StoreTwo"

const UserName = () => {
  const name = useStore((state) => state.user.name) // Only subscribes to 'name'
  const updateName = useStore((state) => state.updateName)
  return (
    <div>
      <h1 className="text-xl">Name: {name}</h1>
      <input
        type="text"
        className="border p-1"
        placeholder="Update name"
        onChange={(e) => updateName(e.target.value)}
      />
    </div>
  )
}

export default UserName
