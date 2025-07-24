
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { useContext } from 'react';
import { CartContext } from '../utills/Context/CartContext';

export const Login = () => {
const{login}=useContext(CartContext)
  const e=useForm()
  console.log(e)
    const {register,control,handleSubmit,formState}= useForm()
    const loginsubmit=(data)=>{
      console.log(data)
      login()
    }
  return (
    <>
    <div>
            <h1 className="text-4xl text-center my-3.5 font-serif"> Login Page</h1>
            <form action={"App"} onSubmit={handleSubmit(loginsubmit)} method="POST"  className="border-2 border-lime-300 outline-4 outline-indigo-900 w-1/2 rounded m-auto my-5 font-serif p-6">
                {/* email Start */}
                            <label htmlFor="email" className="text-xl">Email</label>
                            <br />
                            <input type="text" {...register("email",{
                              required:true,
                              pattern:{
                                value:/^\S+@\S+\.\S+$/,
                                message:"Invalid Email"
                              }
                            })} 
                            className="border-2 mb-4 rounded"
                            />
                            <span>{formState.errors.email?formState.errors.email.message:""}</span>
                {/* email End */}
                <br/>
                {/* Password Start */}
                            <label htmlFor="password" className="text-xl">Password</label>
                            <br />
                            <input type="password" {...register("password",{
                              required:{
                                value:true,
                                message:"Password is required"
                              },
                              minLength: {
                                value: 6,
                                message: "The Password Length Must be Grater Than 6"
                              },
                              maxLength: {
                                value: 20,
                                message: "The Password Length Must be Less Than 20"
                              }

                            })} 
                            className="border-2 mb-4 rounded"
                            />
                            <span>{formState.errors.password?formState.errors.password.message:""}</span>

                {/* Password End */}
                <br />
                <button type="submit" className="text-xl bg-gray-900 py-2 px-4 outline-1 outline-lime-300 rounded text-white flex">Login</button>
            </form>
        </div>
        <DevTool control={control} />
    </>
  )
}

