import { Cardsection } from "./Components/Cardsection"
import { Loader } from "./Components/Loader"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function App() { 
  const [filterdata,setFilterdata] = useState([]);

  const  callApi= async ()=>{
    const resp=await fetch("https://dummyjson.com/products?limit=500");
    const data=await resp.json()
    setFilterdata(data);
}

        useEffect(()=>{
          callApi()
          console.log("useEffect")
        },[])

  return (
    <>
    <div className="Cardsection">
    {
      
      filterdata.products?.map((item,index)=>{
        return (
          // <Link to={`/product/${item.title.split(" ").join("_")}`} key={item.id}>
          <Link to={`/product/${item.id}`} key={item.id}>
          <Cardsection data={item} key={index}/>
          </Link>

        )

      })
    }
    </div>
    </>
  )
}