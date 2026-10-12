import { useState, useEffect } from 'react'



function EffectCounter() {

    const handleIncrease = ()=>{
        setCount(count + 1); setMessage('Il conteggio è aumentato!')
    }

  //useState()
  const [count, setCount] = useState(0)
  //messaggio all'aumento del conteggio
  const [message, setMessage] = useState('')

  //useEffect()
  useEffect(()=> {
         document.title = `count: ${count}`
         if (count > 0) {
             setMessage('Il conteggio è aumentato!')
        } else {
             setMessage('')
        }
     }, [count])


  return (
   <div className="m-12 text-center">
    <h1 className="text-3xl mb-3 font-bold text-green-700">useEffect counter:</h1>
      <p>Il mio conteggio è: {count}</p>
      <p className="font-bold italic">{message}</p>
    <div className="flex row flex-wrap justify-center gap-2">
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick= {handleIncrease}>Aumenta</button>
      <button className="border-2 rounded w-30 h-8 mt-3 bg-emerald-800 border-amber-50 text-amber-50" onClick={()=> { setCount(0); setMessage('')}}>Reset</button>
    </div>
   </div>
  )
}

export default EffectCounter