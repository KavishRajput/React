import { useEffect, useState } from "react"

export const useOnline=()=>{
    const[isonline,setIsonline]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{setIsonline(true);})
        window.addEventListener("offline",()=>{setIsonline(false)})
        return()=>{
            window.removeEventListener("online",()=>{setIsonline(true);})
            window.removeEventListener("offline",()=>{setIsonline(false);})
        }
    },[])
    return isonline;
}