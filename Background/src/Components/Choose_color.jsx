import { useState } from "react";

export const Colorbox = () => {
  const [color, setColor] = useState(""); 
  
  document.body.style.backgroundColor = color;

  const main = {
    display: "flex",
    marginLeft: "900px",
    justifyContent:"space-around"
  };

  const outerbox = {
    width: "40px",
    height: "90px",
    border: "2px solid black",
    background: "white",
  };

  // List of colors to choose from
  const colors = ["red", "green", "blue", "yellow", "purple", "orange","gray","tomato","pink","black"];

  return (
    <>
      <div style={main}>


        {colors.map((colorOption) => (
          <div style={outerbox} key={colorOption} onClick={() => setColor(colorOption)}>
            <div style={{
                    position: "relative",
                    top: "50px",
                    width: "32px",
                    height: "32px",
                    margin: "2px",
                    border: "2px solid black",
                    cursor: "pointer", 
                    backgroundColor:colorOption,
                                }}></div>
            </div>
        ))}


        
      </div>
    </>
  );
};