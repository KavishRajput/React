import { Buy,Cart } from "./buttons"

export const Cardsection=()=>{
    const container={
        margin:"20px",
        height:"420px",
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
            <img style={image} src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div>
                <p style={brand}>Essence</p>
                <p style={title}>Essence Mascara Lash Princess</p>
                <span style={price}>$9.99</span>
                <span style={rating}>8.2</span>
            </div>
            <div style={buttons}>
                <Cart />
                <Buy />
            </div>

        </div>
        </>
    )
}