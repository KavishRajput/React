import { useState } from "react"
export const Navsearchbar=({searchdata})=>{

    const [search, setSearch] = useState('')
    function getvalue(e){
        setSearch(e.target.value);
        console.log(e.target.value);
        searchdata(search)
      }

    let Navsearchbar={
        height:"40px",
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
    return(
        <>
        <input type="text" name="search" id="search" placeholder="Write Item Name" style={Navsearchbar} value={search} onChange={getvalue} />
        </>
    )
}

