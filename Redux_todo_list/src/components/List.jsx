import { X, Pencil, Save } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletetodo, updatetodo, toggleComplete } from '../features/todo/todoSlice';

export const List = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todo);
    const alltodo = data.todo;

    const [edit, setEdit] = useState("");
    const [edittext, setEditText] = useState("");

    const save = (id) => {
        dispatch(updatetodo({ id, task: edittext }));
        setEdit("");
        setEditText("");
    };

    return (
        <div className="flex flex-col gap-4">
            {alltodo.length > 0 ? (
                alltodo.map((item, index) =>
                    edit === item.id ? (
                        <div key={item.id} className="flex justify-between items-center border-2 border-cyan-800 p-4 rounded">
                            <div>
                                <span className="mx-4">{index + 1}</span>
                                <input type="checkbox" name="complete" id="complete" checked={item.completed} onChange={() => dispatch(toggleComplete(item.id))}/>
                                <input type="text" value={edittext} onChange={(e) => setEditText(e.target.value)} className="ml-4 border px-2 py-1 rounded"/>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-cyan-400 text-white p-2 rounded hover:bg-cyan-600"
                                    onClick={() => save(item.id)}>
                                    <Save />
                                </button>
                                <button className="bg-cyan-400 text-white p-2 rounded hover:bg-cyan-600"
                                    onClick={() => dispatch(deletetodo(item.id))}>
                                    <X />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div key={item.id} className="flex justify-between items-center border-2 border-cyan-800 p-4 rounded">
                            <div>
                                <span className="mx-4">{index + 1}</span>
                                <input type="checkbox" name="complete" id="complete" checked={item.completed} onChange={() => dispatch(toggleComplete(item.id))} />
                                <span className={`ml-4 text-xl ${item.completed ? "line-through text-red-600" : ""}`}>
                                    {item.task}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-cyan-400 text-white p-2 rounded hover:bg-cyan-600" onClick={() => {
                                        setEdit(item.id);
                                        setEditText(item.task);
                                    }}
                                >
                                    <Pencil />
                                </button>
                                <button className="bg-cyan-400 text-white p-2 rounded hover:bg-cyan-600"
                                    onClick={() => dispatch(deletetodo(item.id))}>
                                    <X />
                                </button>
                            </div>
                        </div>
                    )
                )
            ) : (
                <p className="text-center text-red-700 text-xl">There Is No Task</p>
            )}
        </div>
    );
};
