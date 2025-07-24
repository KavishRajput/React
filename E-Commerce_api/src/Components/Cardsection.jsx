import { Buy,Cart } from "./buttons"

export const Cardsection=(props)=>{
    const container={
        margin:"20px",
        height:"420",
        width:"300px",
        backgroundColor:"var(--primary-color)",
        borderRadius:"10px",

    }
    const imagebox={
        padding:"10px",
        width:"100%",
        height:"60%",
        borderRadius:"10px",
    }
    const image={
        width:"100%",
        height:"100%",
        borderRadius:"10px 10px 0px 0px",
    }
    const brand={
        fontFamily:"serif",
        fontSize:"20px",
        marginLeft:"20px",
        color:"gray",
        marginBlock:"10px",
    }
    const title={
        fontFamily:"serif",
        fontSize:"20px",
        marginLeft:"20px",
        marginBlock:"10px",
    }
    const price={
        marginLeft:"20px",
        fontSize:"20px",
        fontFamily:"math",
        marginBlock:"10px",

    }
    const rating={
        float:"right",
        marginRight:"40px",
        fontSize:"20px",
        fontFamily:"math",

    }
    const buttons={
        display:"flex",
        justifyContent:"space-around",
        marginBlock:"10px"
    }

    return(
        <>
        <div style={container}>
            <div style={imagebox}>
            <img style={image} src={props.data.thumbnail} alt="" />
            </div>
            <div>
                <p style={brand}>{props.data.brand}</p>
                <p style={title}>{props.data.title}</p>
                <span style={price}>{`₹ ${props.data.price}`}</span>
                <span style={rating}>{props.data.rating}</span>
            </div>
            <div style={buttons}>
                <Cart />
                <Buy />
            </div>

        </div>
        </>
    )
}