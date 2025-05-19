import { BrowserRouter,Route,Routes} from "react-router-dom"
import App from "./App"
import { Dashboard } from "./Pages/Dashboard"
import { Employee } from "./Pages/Employee"
import { Add_Employee } from "./Pages/Add_Employee"
    export const Layout=()=>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="employee" element={<Employee/>}/>
                    <Route path="add_employee" element={<Add_Employee/>}/>
                </Route>
            </Routes >
        </BrowserRouter>
    )
}