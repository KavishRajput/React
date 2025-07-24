import { useForm } from "react-hook-form"
import { databases } from "../appwrite/Auth";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Query } from "appwrite";
import { useState } from "react";
import Config from "../Config/Config";
export const Profile=()=>{

    const { databaseID,usercollectionID }=Config;
    const { register, handleSubmit,  reset, formState: { errors }  } = useForm({defaultValues: { Name: "", Email: "", Bio: "" }});

    const [userdata, setUserdata] = useState();
    const[edit,setEdit]=useState(false);

    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()



    function formatDate(isString) {
  const date = new Date(isString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}


    const onedit=()=>{
        setEdit(true)
        console.log("edit enable")
    }
    const onsave=async (data)=>{
         try{

            const save_response = await databases.updateDocument(
                databaseID,
                usercollectionID,
                userdata.$id,
                {
                    Name: data.Name,
                    Email: data.Email,
                    Bio:data.Bio
                }   
                );
                console.log(save_response);
                getuserdata();
            }
            catch(error){
            console.log("error while update document",error)
            }
        setEdit(false)
        console.log("edit disable")
    }


    const getuserdata =  async () =>{
        try{
            const user_data = await databases.listDocuments(databaseID,usercollectionID,
                [
                    Query.equal("UserID",user.userId)
                ]
            )
            setUserdata(user_data.documents[0])
            reset({ 
                Name: user_data.documents[0].Name, 
                Email: user_data.documents[0].Email, 
                Bio: user_data.documents[0].Bio,
                
            });
            console.log(user_data)
        }
        catch(error){
            console.log("error while getting user data",error)
        }
    }
    useEffect(()=>{
        getuserdata()
    },[])   


    return(
        <>
        {!edit?
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">

                {/* Avatar and Name Section */}
                <div className="flex items-center p-6 bg-gray-50 space-x-6">
                    <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(userdata?.Name)}`} alt={userdata?.Name || 'Avatar'} className="w-20 h-20 rounded-full ring-4 ring-indigo-500"/>
                    <div>
                        <p className="text-2xl font-semibold text-gray-800">{userdata?.Name || "Name"}</p>
                        <p className="text-sm text-gray-500 mt-1">ID: {userdata?.UserID || "-"}</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="px-6 py-8 space-y-6">
                    <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Bio</h6>
                    <p className="mt-1 text-base text-gray-700">{userdata?.Bio || "—"}</p>
                    </div>
                <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Email</h6>
                    <p className="mt-1 text-base text-gray-700">{userdata?.Email || "—"}</p>
                </div>
                <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Joined</h6>
                    <p className="mt-1 text-base text-gray-700">{formatDate(userdata?.$createdAt)}</p>
                </div>
                </div>

                {/* Actions Section */}
                <div className="px-6 pb-6">
                <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition" onClick={()=>onedit()}>
                    Edit Profile
                </button>
                </div>
        </div>
        </div>
        :
        <form action={handleSubmit(onsave)}>

                <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">

                {/* Avatar and Name Section */}
                <div className="flex items-center p-6 bg-gray-50 space-x-6">
                    <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(userdata?.Name)}`} alt={userdata?.Name || 'Avatar'} className="w-20 h-20 rounded-full ring-4 ring-indigo-500"/>
                    <div>
                        <input type="text" {...register("Name")}/>
                        <p className="text-sm text-gray-500 mt-1">ID: {userdata?.UserID || "-"}</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="px-6 py-8 space-y-6">
                    <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Bio</h6>
                    <input type="text" {...register("Bio")}/>
                    </div>
                <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Email</h6>
                    <input type="text" className="" {...register("Email")} />
                </div>
                {/* <div>
                    <h6 className="text-xs font-medium text-gray-600 uppercase">Joined</h6>
                    <input type="date" {...register("Joined")}/>
                </div> */}
                </div>

                {/* Actions Section */}
                <div className="px-6 pb-6">
                <button type="submit" className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition">
                    Save Profile
                </button>
                </div>
        </div>
        </div>
        </form>
        }
        </>
    )
}