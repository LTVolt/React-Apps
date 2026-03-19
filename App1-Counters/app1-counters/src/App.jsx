import { useState } from "react"

const [counters, setCounters] = useState(0);

const activeCounters = [
  {id: 1, name: "Counter 1", value: 0},
  {id: 2, name: "Counter 2", value: 0},
  {id: 3, name: "Counter 3", value: 0}
]

function Counter() {
  return (
  <>
    <div>
      <button className="ms-10 mt-10 w-40 h-10 hover:bg-green-300 border-2 rounded-lg border-green-600 flex justify-center items-center">
        Current Value: 0
      </button>
    </div>
  </>
  )
}

// function increment(Counter) {
//   setValue(Counter + 1)
// }

const App = () => {
  return ( <>
    <div>
      <button className="ms-10 mt-10 w-40 h-10 hover:bg-blue-300 border-2 rounded-lg border-blue-600 flex justify-center items-center">
        Add Counter
      </button>
    </div>

    <div>
      <button className="ms-10 mt-10 w-40 h-10 hover:bg-red-300 border-2 rounded-lg border-red-600 flex justify-center items-center">
        Remove Counter
      </button>

      {activeCounters.map()}
    </div>

  </> );
}
 
export default App;