import { useEffect, useState } from "react";

export default function App(){

  let [password,setPassword]=useState("")
  let[length,setLength]=useState(6)
  let[uppercase,setUppercase]=useState(false)
  let[numbers,setNumbers]=useState(false)
  let[specialChar,setSpecialChar]=useState(false)
  
  function generatepassword(){
    let lowercase="abcdefghijklmnopqrstuvwxyz"
    if(uppercase) lowercase+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbers) lowercase+="0123456789"
    if(specialChar) lowercase+="!@#$%^&*()_+"
    let password=""
    for(let i=0;i<length;i++){
      password+=lowercase[Math.floor(Math.random()*lowercase.length)]
      }
      setPassword(password)    
      
    }


  useEffect(()=>{
    if(password=!""){
      generatepassword()
    }
  },[length,uppercase,numbers,specialChar])

  return (  
    <>
    <div className="flex justify-center items-center">
    <div className="border-2 border-blue-400 flex justify-center items-center flex-col w-2xl">
      <input type="text" name="password" id="password" className="border-2 border-black rounded" placeholder="Password Is Here..." value={password} readOnly/>
      <input type="checkbox" name="password" id="uppercase" onChange={()=>setUppercase(!uppercase)}/>
      <label htmlFor="uppercase">uppercase</label>
      <input type="checkbox" name="password" id="numValue" onChange={()=>setNumbers(!numbers)}/>
      <label htmlFor="numValue">numValue</label>
      <input type="checkbox" name="password" id="specialCharacter" onChange={()=>setSpecialChar(!specialChar)}/>  
      <label htmlFor="specialCharacter">specialCharacter</label>
      <input type="range" name="length" id="length" min="6" max="30" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
      <label htmlFor="length">length:{length}</label>
      <button onClick={generatepassword}>Generate Password</button>
      <h1></h1>
    </div>
    </div>
    </>
  )
}