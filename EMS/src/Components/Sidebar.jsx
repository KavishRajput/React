import { Outlet } from "react-router"

export const Sidebar=()=>{
    return(
        <>
        <div>
            <div className="bg-sky-950 p-3 flex flex-col w-xs h-screen">
                <p className="font-extrabold text-3xl font-serif text-white text-center">Sidebar</p>
                <hr/>
                <ol>
                    <li>Dashboard</li>
                    <li>Employees</li>
                    <li>Department</li>
                    <li>Setting</li>
                    <li></li>
                </ol>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
        </>
    )
}