import { useState } from "react";
import { Card_data } from "../data/data";
import { Card } from "./Card";
export const Searchbar=()=>{
        {/*const [searchTerm, setSearchTerm] = useState("");
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
        }*/}


    let searchbar={
        width: "40rem",
        padding: "10px",
        borderRadius: "5px",
        border: "2px solid white",
        paddingLeft: "40px",
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwlxlnV-HuubsXF1xLAEHk4GYSwsoxCWd1Q&s)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "35px 35px",
        cursor: "pointer"
    }
    return (
      <>
      {/* 
      <input type="search" name="search" id="search" value={searchTerm} onChange={getvalue} style={searchbar} placeholder="Search"/>
      <button onClick={searchdata}>Submit</button>
      {
            filterdata.map((item,index)=>{
              return (
                <Card key={index} data={item} />
              )
            })
          }
        */}


      </>
    )
  }