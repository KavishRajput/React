import { createSlice } from "@reduxjs/toolkit";
const authslice=createSlice({
    name:"auth",
    initialState:{
        loggedin:localStorage.getItem("user")?true:false,
        user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
    },
    reducers:{
        setUser:(state,action)=>{
            state.loggedin=true;
            state.user=action.payload;
        },
        logout:(state,action)=>{
            state.loggedin= false;
            state.user=null;
        }
    }
})
export const {setUser,logout} = authslice.actions
export default authslice.reducer;