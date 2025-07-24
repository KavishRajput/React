bun devicePixelRatiobuimport { useState,useEffect} from "react";
import { Navbar} from "./Components/Navbar";
import { Card } from "./Components/Card";
import { Searchbar } from "./Components/input";
import './App.css';

export default function App() {
const [filterdata,setfilterdata] = useState([]);
const [products,setProducts] = useState([]);


  const searchdata=(Search_string)=>{
    const filtercard = products.filter((prod)=>{
      return(
        prod.title.toLowerCase().includes(Search_string.toLowerCase())
      )
    })
      setfilterdata(filtercard)
  }
    

  const  callApi= async ()=>{
    const resp=await fetch("https://fakestoreapi.com/products");
    const data=await resp.json()
    setProducts(data)
    setfilterdata(data)
}

        useEffect(()=>{
          callApi()
          console.log("useEffect")
        },[])
        
  return (
    <>

    <Navbar />
    <Searchbar searchdata={searchdata} />

    <div className="container"> 
    {
      filterdata.map((item,index)=>{
        return (
          <Card key={index} data={item} />
        )
      })
    }
    </div>

    </>
  )
}