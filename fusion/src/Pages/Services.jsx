import { Outlet } from "react-router"
import { Services_Sidebar } from "../components/Services_Sidebar"

export const Services=()=>{
    return (
        <>
        <div className="flex">
            <Services_Sidebar />
            <Outlet />
        </div>
        </>
    )
}