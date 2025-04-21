export const Faq_Section=({question,answer})=>{
    return(
        <>
        <div>
            <p className="text-lg">{question}</p>
            <br />
            <p>{answer}</p>
        </div>
        </>
    )
}