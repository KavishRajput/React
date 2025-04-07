import { useRouteError } from "react-router"

export const Errorpage=()=>{
    const error=useRouteError()
    return(
        <>
        <div className="h-screen w-screen bg-amber-300">
            <div className="text-6xl text-black flex justify-center gap-7 pt-20">
                <span>{error.status}</span>
                <span>{error.statusText}</span>
            </div>
        <p className="text-6xl text-black text-center mt-15">{error.error.message}</p>
        </div>
        </>
    )
}

{
    /*export const Errorpage = ({ error }) => {
    return (
      <div className="h-screen w-screen bg-amber-300">
        <div className="text-6xl text-black flex justify-center gap-7 pt-20">
          <span>{error?.status || "404"}</span>
          <span>{error?.statusText || "Page Not Found"}</span>
        </div>
        <p className="text-6xl text-black text-center mt-15">
          {error?.error?.message || "Sorry, this page doesn't exist."}
        </p>
      </div>
    );
  }; */
}