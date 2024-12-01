import React, { useState, useEffect } from "react"

const UseEffectHook = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([true])
  const [count, setCount] = useState(0)
  const [shouldFetch, setShouldFetch] = useState(false)
  // useEffect(() => {
  //   // Fetch data from API
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  useEffect(() => {
    if (!setShouldFetch) return
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response
        .json()
        .then((data) => {
          setData(data.slice(0, 10))
          // console.log(data)
          setLoading(false)
        })
        .catch((error) => {
          // console.log(error)
          setLoading(false)
        })
    )
  }, [shouldFetch])

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100   shadow-lg">
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setShouldFetch(true)}
        >
          Load
        </button>
        <button
          className="px-6 py-2 bg-gray-500 text-white  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => {
            setShouldFetch(false)
            setData([])
          }}
        >
          Clear
        </button>
      </div>

      <div className="w-full p-4 bg-white shadow-md">
        <h3 className="text-xl font-semibold">Loaded Data:</h3>
        {loading ? (
          <p className="text-gray-600 mt-2">Loading...</p>
        ) : data.length > 0 ? (
          <ul className="mt-2 text-gray-800">
            {data.map((item) => (
              <li key={item.id} className="border-b py-2">
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-2">No data loaded yet.</p>
        )}
      </div>
    </div>
  )
}

export default UseEffectHook
