import { useState } from "react";
import { searchData } from "../utills/useSearchBar";
export const Searchbar=({products,setFilterdata})=>{
    const [searchTerm, setSearchTerm] = useState("");

    function getvalue(e){
      setSearchTerm(e.target.value);
      console.log(e.target.value);
    }
    return(
        <>
        <div className="flex justify-center">
              <input type="search" name="search" id="search" className="mt-10 text-xl border-gray-600 border-2 rounded ps-1" value={searchTerm} onChange={getvalue} placeholder="Search"/>
              <button onClick={()=>{
                setFilterdata
                (searchData(products,searchTerm))
              }} className="bg-gray-900 text-white px-6 mt-9 rounded ms-5 h-10">Submit</button>
              </div>
        </>
    )
}
