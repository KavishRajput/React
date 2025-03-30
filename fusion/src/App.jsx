import { useState } from "react"
import { Cards } from "./components/Cards"

export default function App(){
  const[filterdata,setFilterdata]=useState([]);
  const callApi = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    setFilterdata(data);
    console.log(data)
  }
  useEffect(()=>{
    callApi()
    console.log("useEffect")
  },[])
  return (
    <>
    {
      filterdata.products?.map((value,index)=>{
        return (
          <Cards data={value} key={index} />
        )
      })
    }
    </>
  )
}