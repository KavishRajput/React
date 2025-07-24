import { useState } from "react"

export const Signin=()=>{
{/*Handle Inputs start*/}
// const[email,setEmail]=useState();
// const[password,setPassword]=useState();
const [credentials, setCredentials] = useState(
    {
        email: "",
        password: "",
        Gender:"",
        hobbies:[]
    }); // email and password must be same as name in input field
// const {email,password}=credentials;
const handlecredentials=(e)=>{
    const {name,value,type}=e.target
    handleerror(name,value);
    if(type=="radio"){
        if(e.target.checked){
            setCredentials((prevstate)=>{
                return({
                    ...prevstate,
                    [name]:value
                })
            })
        }
    }
    else if(type=="checkbox"){
        console.log("checkbox")
        if(e.target.checked){
            setCredentials((prevstate)=>{
                return({
                    ...prevstate,
                    [name]:[ ...prevstate.hobbies, value ]
                })
            })
            
        }
        else{
            setCredentials((prevstate)=>{
                return({
                    ...prevstate,
                    [name]:prevstate.hobbies.filter((v)=>value!==v)
                })
            })
                }
            }
            
            // console.log(name,value)
            else{
                setCredentials((prevstate)=>{
                    return({
                        ...prevstate,
                        [name]:value
                    })
                })
            }
            
            console.log(credentials)
        }
        {/*Handle Inputs stop*/}




        {/*Handle Error start*/}
        const[error,setError]=useState(
            {
                email: "",
                password: "",
            }
        );
        const handleerror=(name,value)=>{
            if(name==="email"){
                !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?setError((prev)=>{
                    return{
                        ...prev,
                        [name]:"invalid email"
                    }
                }):
               setError((prev)=>{
                    return{
                        ...prev,
                        [name]:""
                    }
            })
        }
            
            
            
            else if(name==="password"){
               value.length<8?
               setError((prev)=>{
                    return{
                        ...prev,
                        [name]:"Length Must Be Greater Than 8"
                    }
                }):
                setError((prev)=>{
                    return{
                        ...prev,
                        [name]:""
                    }
            })
        }
        }
        {/*Handle Error stop*/}




        const loginsubmit=(e)=>{
            e.preventDefault();
            console.log(credentials);
        }
        return (
            <>
        <div>
            <h1 className="text-4xl text-center my-3.5 font-serif"> Signin Page</h1>
            <form action={""} method="POST" onSubmit={loginsubmit} className="border-2 border-lime-300 outline-4 outline-indigo-900 w-1/2 rounded m-auto my-5 font-serif p-6">
                {/* email Start */}
                            <label htmlFor="email" className="text-xl">Email</label>
                            <br />
                            <input type="email" name="email" className="border-2 mb-4 rounded" 
                            // value={email}
                             onChange={
                                // (e)=>setEmail(e.target.value)
                                handlecredentials
                                }
                                required/>
                                <span className="text-red-500 ms-5">{error.email && error.email}</span>
                {/* email End */}
                <br/>
                {/* Password Start */}
                            <label htmlFor="password" className="text-xl">Password</label>
                            <br />
                            <input type="password" name="password" className="border-2 mb-4 rounded" 
                            // value={password}
                             onChange={
                                 // (e)=>setPassword(e.target.value)
                                 handlecredentials
                                }
                                required/>
                                <span className="text-red-500 ms-5">{error.password && error.password}</span>

                {/* Password End */}
                <br/>
                {/* Gender Start */}
                            <div className="mb-4">
                            <h2 className="text-xl">Gender</h2>
                                <div className="flex">
                                    <div className="me-3">
                                    <input type="radio" name="Gender" id="male" value={"male"} onChange={handlecredentials}/>
                                    <label htmlFor="male">Male</label>
                                    </div>

                                    <div>
                                    <input type="radio" name="Gender" id="female" value={"female"} onChange={handlecredentials}/>
                                    <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                {/* Gender End */}
                <div className="mb-4">
                <h2 className="text-xl">Hobbies</h2>
                    <div className="flex">

                        <div className="me-3">
                        <input type="checkbox" name="hobbies" id="reading" value={"reading"} onChange={handlecredentials}/>
                        <label htmlFor="reading" className="text-[18px]">Reading</label>
                        </div>

                        <div className="me-3">
                        <input type="checkbox" name="hobbies" id="swimming" value={"swimming"} onChange={handlecredentials}/>
                        <label htmlFor="swimming" className="text-[18px]">Swimming</label>
                        </div>

                        <div>
                        <input type="checkbox" name="hobbies" id="dancing" value={"dancing"} onChange={handlecredentials}/>
                        <label htmlFor="dancing" className="text-[18px]">Dancing</label>
                        </div>

                    </div>
                </div>
                <button type="submit" className="text-xl bg-gray-900 py-2 px-4 outline-1 outline-lime-300 rounded text-white">Signin</button>
            </form>
        </div>
        </>
    )
}