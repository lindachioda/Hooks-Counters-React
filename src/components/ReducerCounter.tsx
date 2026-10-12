
import { useReducer } from 'react'


function ReducerCounter() {
  //useState()
  const [count, dispatchCounter] = useReducer(countReducer, 0)


  //tipizza le azioni
  type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'reset' }

  //funzione switch per gesstione bottoni
  function countReducer (count:number, action:Action):number {

    switch(action.type){
        case 'increase': return count + 1;
        case 'decrease': return count - 1;
        case 'reset': return 0;
        default: return count;  
    }
  }

  return (
   <div className="m-12 text-center">
    <h1 className="text-3xl mb-3 font-bold text-green-700">useReducer counter:</h1>
      <p>Il mio conteggio è: {count}</p>
    <div className="flex row flex-wrap justify-center gap-2">
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> dispatchCounter ({type: 'increase'})}>Aumenta</button>
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> dispatchCounter ({type: 'decrease'})}>Diminuisci</button>
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> dispatchCounter ({type: 'reset'})}>Reset</button>
    </div>
   </div>
  )
}

export default ReducerCounter