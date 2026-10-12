import { useState } from 'react'

function StateCounter() {
  //useState()
  const [count, setCount] = useState(0)

  return (
   <div className="m-12 text-center">
    <h1 className="text-3xl mb-3 font-bold text-green-700">useState counter:</h1>
      <p>Il mio conteggio è: {count}</p>
    <div className="flex row flex-wrap justify-center gap-2">
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> setCount(count + 1)}>Aumenta</button>
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> setCount(0)}>Reset</button>
    </div>
   </div>
  )
}

export default StateCounter