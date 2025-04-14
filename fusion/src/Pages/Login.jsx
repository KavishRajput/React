import { useState } from "react"

export const Login=()=>{
    // const[username,setUsername]=useState();
    // const[password,setPassword]=useState();
    const [credentials, setCredentials] = useState({ username: "", password: "" ,Gender:"",
        hobbies:[]
    }); // username and password must be same as name in input field
    // const {username,password}=credentials;
    const handlecredentials=(e)=>{
        const {name,value,type}=e.target
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
    const loginsubmit=(e)=>{
        e.preventDefault();
        console.log(credentials);
    }
    return (
        <>
        <div>
            <h1> Login Page</h1>
            <form action={""} method="POST" onSubmit={loginsubmit}>
                {/* Username Start */}
                            <label>Username:</label>
                            <br />
                            <input type="text" name="username" className="border-2" 
                            // value={username}
                             onChange={
                                // (e)=>setUsername(e.target.value)
                                handlecredentials
                                }/>
                {/* Username End */}
                <br/>
                {/* Password Start */}
                            <label>Password:</label>
                            <br />
                            <input type="password" name="password" className="border-2" 
                            // value={password}
                             onChange={
                                // (e)=>setPassword(e.target.value)
                                handlecredentials
                                }/>
                {/* Password End */}
                <br/>
                {/* Gender Start */}
                            <h2>Gender</h2>
                            <input type="radio" name="Gender" id="male" value={"male"} onChange={handlecredentials}/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="Gender" id="female" value={"female"} onChange={handlecredentials}/>
                            <label htmlFor="female">Female</label>
                {/* Gender End */}
                <br/>
                <h2>Hobbies</h2>
                <input type="checkbox" name="hobbies" id="reading" value={"reading"} onChange={handlecredentials}/>
                <label htmlFor="reading">Reading</label>
                <input type="checkbox" name="hobbies" id="swimming" value={"swimming"} onChange={handlecredentials}/>
                <label htmlFor="swimming">Swimming</label>
                <input type="checkbox" name="hobbies" id="dancing" value={"dancing"} onChange={handlecredentials}/>
                <label htmlFor="dancing">Dancing</label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}