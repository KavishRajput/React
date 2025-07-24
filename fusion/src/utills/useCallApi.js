import { useState,useEffect } from "react"
export default function useCallApi(url){

const [singleproduct,setSingleproduct]=useState(null)

async function getsingledata(){
  const response = await fetch(url)
  const data=await response.json()
  setSingleproduct(data)

}

useEffect(()=>{
  getsingledata()
},[url])

return singleproduct

} 