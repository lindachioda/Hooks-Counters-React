import './App.css'
import EffectCounter from './components/EffectCounter'
import ReducerCounter from './components/ReducerCounter'
import StateCounter from './components/StateCounter'

function App() {

  return (
   <div>
    <h1 className="text-2xl mb-3 font-bold italic text-center m-12 text-fuchsia-900">• Hooks counters •</h1>
      <StateCounter></StateCounter>
      <EffectCounter></EffectCounter>
      <ReducerCounter></ReducerCounter>
   </div>
  )
}

export default App
