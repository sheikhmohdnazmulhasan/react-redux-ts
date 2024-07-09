import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch();

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className=" flex border border-purple-500 p-20 rounded-md bg-gray-100">

        <button onClick={() => dispatch(increment())} className="px-3 py-2 bg-green-500 text-white font-semibold rounded-md">Increment</button>

        <p className="text-3xl font-semibold px-10">{count}</p>

        <button onClick={() => dispatch(decrement())} className={`px-3 py-2 ${count ? 'bg-red-500' : 'bg-gray-300'} text-white font-semibold rounded-md`}>Decrement</button>
      </div>
    </div>
  )
}

export default App
