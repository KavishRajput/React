export const Ecom_card=(props)=>{
    return(
        <>
            <div className="card">
                <p>{props.data.product_name}</p>
                <p>{props.data.product_price}</p>
            </div>
        </>
    )
}