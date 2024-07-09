
function App() {

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className=" flex border border-purple-500 p-20 rounded-md bg-gray-100">
        <button className="px-3 py-2 bg-green-500 text-white font-semibold rounded-md">Increment</button>
        <p className="text-3xl font-semibold px-10">0</p>
        <button className="px-3 py-2 bg-red-500 text-white font-semibold rounded-md">Decrement</button>
      </div>
    </div>
  )
}

export default App
