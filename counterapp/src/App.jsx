import { useState } from "react"
export default function App(){
  const zero={color:"red"}
  const positive={color:"green"}
  const [count,setCount]=useState(0)
  return(
    <>
    <button onClick={()=>{count==0?setCount(count):setCount(count-1)}}>-</button>
    <h1 style={count==0?zero:positive}>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    </>
  )
} 