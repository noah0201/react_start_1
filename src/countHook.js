import { useState,useContext } from "react"
import { ThemeContext } from "./App"

export default function CounterHook({Count}){

  const [count,setCount] = useState(Count)
  const style = useContext(ThemeContext)
  console.log('funciton');
  return (
    <>
      <button style={style} onClick={()=>setCount(prevCount=>prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={()=>setCount(prevCount=>prevCount + 1)}>+</button>
    </>
  )
}