import { BrowserRouter,Route,Routes } from "react-router"
import App from "../App"
import {Login} from "./LoginPage"
import {Signin} from "./SigninPage"
import {Dashboard} from "./Dashboard"
import {Createpost} from "./Createpost"
import {Published} from "./Published"
import {Draft} from "./Draft"
import { Dashboard_Content } from "./Dashboard_Content"
import {Both} from "./Both"
import { Profile } from "./Profile"
import { ProtectedRoutes } from "./ProtectedRoutes"
export const Layout=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/profile" element={<Profile/>}/>
                {/* <Route path="/welcome" element={<Welcome/>}> */}
                <Route path="/dashboard/:userId"  element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}>
                    <Route index element={<Dashboard_Content/>}/>
                    <Route path="published" element={<Published/>}/>
                    <Route path="draft" element={<Draft/>}/>
                    <Route path="both" element={<Both/>}/>
                    <Route path="createpost" element={<Createpost/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}