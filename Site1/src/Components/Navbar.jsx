import { Searchbar } from "./input"
    let navdiv={
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80px",
        border: "1px solid #D0DDD0",
        backgroundColor: "#D0DDD0",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }
export const Navbar=()=>{
    return (
        <>
        <div style={navdiv}>
            <Searchbar />
        </div>
        </>
    )
}