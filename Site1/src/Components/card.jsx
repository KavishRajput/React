import { Buy, Cart } from "./buttons";

let main = {
    display:"flex",
    justifyContent:"space-around",
    
};

let container = {
    backgroundColor: "#D0DDD0",
    borderRadius: "10px",
    height: "70vh",
    width: "20vw",
    marginBlock: "20px",
    border: "1px solid black",
    paddingBottom: "30px",
};

let imgbox = {
    width: "97%",
    height: "80%",
};

let img = {
    width: "inherit",
    height: "inherit",
    border: "10px solid rgb(255, 255, 255)",
    borderRadius: "10px 10px 0px 0px",
};

let bottom = {
    position: "relative",
    top: "-50px",
};

let titlecss = {
    fontSize: "18px",
    textAlign: "center",
    height: "40px",
    
};

let pricecss = {
    fontSize: "28px",
    position: "absolute",
    marginTop: "40px",
    left: "20px",
};

let buttons = {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    top: "60px",
    marginTop: "20px",
};

export const Card = (props) => {
    let price = props.data.price;
    let image = props.data.image;
    let title = props.data.title; // Destructure - Destructuring is a JavaScript feature that allows you to extract values from arrays or objects into variables

    return (
        <>
            <div style={main}>
                <div style={container}>
                    <div style={imgbox}>
                        <img src={image} alt="image" style={img} />
                    </div>
                    <div style={bottom}>
                        <span style={titlecss}>{title}</span>
                        <span style={pricecss}>{price}</span>
                        <div style={buttons}>
                            <Cart />
                            <Buy />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
    