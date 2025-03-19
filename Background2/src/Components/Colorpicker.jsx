{/*import { useState } from "react";

export const Colorpicker=(props)=>{
    const[colour,setcolour]=useState();
    const colorpicker={
        height:"40px",
        width:"40px",
        border:"1px solid black",
        borderRadius:"50%",
        marginInline:"10px",
        marginBlock:"10px",
        background:props.col,
    }
    document.body.style.background=colour;
    console.log(props)
    return (
        <>
        <div style={colorpicker} onClick={()=>setcolour(props.col)}></div>
        </>
    )
}*/}


import { useState} from "react";

export const Colorpicker = ({ col }) => {
    function changecolor(){
        document.body.style.backgroundColor = col;

    }

    const colorpickerStyle = {
        height: "40px",
        width: "40px",
        border: "1px solid black",
        borderRadius: "50%",
        marginInline: "10px",
        marginBlock: "10px",
        backgroundColor: col || "gray",
        cursor: "pointer",
    };

    return (
        <div style={colorpickerStyle} onClick={()=>{changecolor()}} ></div>
    );
};
