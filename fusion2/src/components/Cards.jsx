export const Cards=(props)=>{
    const thumbnail=props.data.thumbnail
    const brand=props.data.brand
    const title=props.data.title
    const price=props.data.price
    const rating=props.data.rating

    return (
        <>
        <div className="border-2 border-gray-600 p-3 rounded-lg cursor-pointer w-80 py-10 m-5">
            <img src={thumbnail} alt="" className="w-sm h-70 rounded-lg"/>
            <p className="text-gray-600 capitalize text-xl font-bold px-3 mt-4">{brand}</p>
            <p className="text-black text-lg font-bold tracking-tight px-3 mt-1">{title}</p>
            <div className="flex items-center justify-between px-3 mt-1">
                <p className="text-black font-bold text-lg">₹ {price}</p>
                <p className="text-black font-bold text-lg">{rating}</p>
            </div>
            <div className="flex items-center justify-center gap-10 mt-4">
                <button className="p-1 bg-gray-900 text-white border-2 rounded-sm text-2xl px-10 hover:scale-110">Cart</button>
                <button className="p-1 bg-gray-900 text-white border-2 rounded-sm text-2xl px-10 hover:scale-110">Buy</button>
            </div>
        </div>
        </>
    )
}