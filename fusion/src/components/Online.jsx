import { useOnline } from "../utills/useOnline";
import { MdOutlineWifiOff } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
export const Online=()=>{
    const online=useOnline()
    return(
        <>
        <div className="fixed bottom-5 right-4">{online?<IoIosWifi color="blue" size={30}/>:<MdOutlineWifiOff color="red" size={30}/>}</div>
        </>
    )
}