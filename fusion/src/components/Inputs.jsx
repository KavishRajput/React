import { useState } from "react";
export const Searchbar=({searchdata})=>{
    const [searchTerm, setSearchTerm] = useState("");

    function getvalue(e){
      setSearchTerm(e.target.value);
      console.log(e.target.value);
    }
    return(
        <>
              <input type="search" name="search" id="search" value={searchTerm} onChange={getvalue} placeholder="Search"/>
              <button onClick={()=>{searchdata(searchTerm)}}>Submit</button>
        </>
    )
}