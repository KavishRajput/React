import { useState } from "react"

export const Login=()=>{
    const[username,setUsername]=useState();
    const[password,setPassword]=useState();
    const loginsubmit=(e)=>{
        e.preventDefault();
        console.log(username,password);
    }
    return (
        <>
        <div>
            <h1> Login Page</h1>
            <form action={""} method="POST" onSubmit={loginsubmit}>
                <label>Username:</label>
                <br />
                <input type="text" name="username" className="border-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <br />
                <input type="password" name="password" className="border-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <h2>Gender</h2>
                <input type="radio" name="Gender" id="male" />
                <label for="male">Male</label>
                <input type="radio" name="Gender" id="female" />
                <label for="female">Female</label>
                <br/>
                <h2>Hobbies</h2>
                <input type="checkbox" name="hobbies" id="reading" />
                <label for="reading">Reading</label>
                <input type="checkbox" name="hobbies" id="swimming" />
                <label for="swimming">Swimming</label>
                <input type="checkbox" name="hobbies" id="dancing" />
                <label for="dancing">Dancing</label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}