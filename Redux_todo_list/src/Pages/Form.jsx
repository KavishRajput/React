import { Input } from "../components/input";
import {List} from'../components/List'

export const Form = () => {
    return (
        <>
            <h1 className="text-4xl font-serif text-center fixed bg-white w-full py-4 shadow z-10">To-do List</h1>
            <div className="flex flex-col justify-start items-center min-h-screen pt-24 px-4 bg-animated-blue">
                <div className="bg-white w-full max-w-xl p-4 rounded shadow">
                    <Input/>
                </div>
                <div className="bg-white mt-6 w-full max-w-xl min-h-[10rem] max-h-[60vh] px-4 py-2 rounded border-2 border-cyan-800 overflow-y-auto">
                    <List/>
                </div>
            </div>
        </>
    );
};
