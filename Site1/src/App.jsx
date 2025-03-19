import { Card } from "./Components/card";
import { Searchbar } from "./Components/input";
import { Navbar } from "./Components/navbar";
import { Card_data } from "./data/data";
import { useState } from "react";

export default function App() {
 const [searchTerm, setSearchTerm] = useState("");
const [filterdata,setfilterdata] = useState(Card_data);

  function getvalue(e){
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  const searchdata=()=>{
    const filtercard = Card_data.filter((res)=>{
      return(
        res.title.includes(searchTerm)
      )
    })
      setfilterdata(filtercard)
  }
    
  return (
    <>

    <Navbar />
   <input type="search" name="search" id="search" value={searchTerm} onChange={getvalue}/>
    <button onClick={searchdata}>Submit</button>
    {
      filterdata.map((item,index)=>{
        return (
          <Card key={index} data={item} />
        )
      })
    }

    </>
  )
}