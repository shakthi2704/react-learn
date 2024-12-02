import { create, useStore } from "zustand"

const useStore = create((set) => ({
  user: { name: "john doe", age: 30 },
  updateName: (newNew) =>
    set((state) => ({ user: { ...state.user, name: newName } })),
}))
export default useStore
