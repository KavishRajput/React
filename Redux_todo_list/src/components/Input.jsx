import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo/todoSlice';

export const Input = () => {
    const dispatch=useDispatch()
    const [task,setTask]=useState("")

    const Addtask=()=>{
        dispatch(addtodo(task))
        setTask('')
        console.log("Task Added Sucessfully")
    }

    return (
        <div className="flex justify-between items-center gap-4 border-2 border-cyan-800 w-full px-3 rounded py-2">
            <input type="text" name="addtask" id="addtask" placeholder="Task ..." value={task} onChange={(e)=>setTask(e.target.value)} className="text-xl border-b-2 border-transparent focus:outline-none focus:border-cyan-600 w-full px-2"/>
            <button onClick={Addtask} className="bg-cyan-400 text-white p-3 rounded hover:bg-cyan-600 flex items-center justify-center"><Plus /></button>
        </div>
    );
};
