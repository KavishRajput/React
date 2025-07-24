import { RiArrowDownSLine } from "react-icons/ri";
export const Faq_Section=({question,answer,isopen,setIsopen})=>{
    return(
        <>
        <div className="mb-5 mt-5 w-[70vw] ms-20">
            <div className=" flex justify-between py-3 px-2 bg-gray-300 rounded">
            <span className="text-lg">{question}</span>
            <button className="cursor-pointer" onClick={setIsopen}>
            <RiArrowDownSLine size={28} />
            </button>
            </div>
            {isopen && <p className=" text-lg py-3 px-2 bg-gray-200 rounded">{answer}</p>}
        </div>
        </>
    )
}   