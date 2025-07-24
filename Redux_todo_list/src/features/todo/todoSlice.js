import { createSlice,nanoid } from "@reduxjs/toolkit";
export const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todo:[]
    },
    reducers:{
        addtodo:(state,action)=>{
            let newtask={
                id:nanoid(),
                task:action.payload,
                completed:false
            }
            console.log("action",action)
            state.todo.push(newtask)
            console.log("newtask",newtask)
        },
        deletetodo:(state,action)=>{
            state.todo=state.todo.filter((items)=>items.id!=action.payload)
        },
        updatetodo:(state,action)=>{
            const todo = state.todo.find((items) =>items.id==action.payload.id)
            todo.task=action.payload.task
            console.log("todo.task",todo.task)
        },
        toggleComplete: (state, action) => {
        const id = action.payload;
        console.log(action)
        const todo = state.todo.find(item => item.id === id);
        if (todo) {
        todo.completed = !todo.completed;
        }
}

    }
})
export const {addtodo,deletetodo,updatetodo,toggleComplete}=todoSlice.actions
export default todoSlice.reducer