import { createSlice } from "@reduxjs/toolkit";
const postslice = createSlice({
    name:"post",
    initialState:{
        posts:[],
    },
    reducers:{
        posts:(state,action)=>{
            state.posts=action.payload;
        }
    }
    
})
export const {posts}=postslice.actions
export default postslice.reducer;