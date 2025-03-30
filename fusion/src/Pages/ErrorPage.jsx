import { useRouteError } from "react-router"

export const Errorpage=()=>{
    const error=useRouteError()
    console.log(error)
    return(
        <>
        <div className="h-screen w-screen bg-amber-300">
        <p className="text-6xl text-black text-center"></p>
        </div>
        </>
    )
}