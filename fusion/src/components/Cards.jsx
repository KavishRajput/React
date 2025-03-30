export const Cards=(props)=>{
    console.log(props)
    return (
        <>
        <div className="border-2 border-gray-600 p-3 rounded-lg cursor-pointer w-sm py-10 m-5">
            <img src="https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1736570574" alt="" className="w-md h-70 rounded-lg"/>
            <p className="text-gray-600 capitalize text-xl font-bold px-3 mt-4">brand</p>
            <p className="text-black text-lg font-bold tracking-tight px-3 mt-1">Description</p>
            <div className="flex items-center justify-between px-3 mt-1">
                <p className="text-black font-bold text-lg">₹ 150/-</p>
                <p className="text-black font-bold text-lg">8.2</p>
            </div>
            <div className="flex items-center justify-center gap-10 mt-4">
                <button className="p-1 bg-gray-900 text-white border-2 rounded-sm text-2xl px-10 hover:scale-110">Cart</button>
                <button className="p-1 bg-gray-900 text-white border-2 rounded-sm text-2xl px-10 hover:scale-110">Buy</button>
            </div>
        </div>
        </>
    )
}