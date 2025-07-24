import { useState, useEffect } from "react";
import "../App.css";

export const Colorpicker = (props) => {
    const [boxcolor, setBoxcolor] = useState();

    useEffect(() => {
        if (boxcolor) {
            document.documentElement.style.setProperty("--primary-color", boxcolor);
        }
    }, [boxcolor]);

    const outer = {
        width: "40px",
        height: "90px",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        borderBottom: "2px solid black",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginInline:"10px",
        marginBottom:"5px"
    };
    const inner = {
        position: "relative",
        top: "23px",
        width: "32px",
        height: "32px",
        margin: "2px",
        border: "2px solid black",
        cursor: "pointer", 
        backgroundColor: props.colour, 
    };

    return (
            <div style={outer}>
                <div style={inner} onClick={() => setBoxcolor(props.colour)}></div>
            </div>
    );
};
