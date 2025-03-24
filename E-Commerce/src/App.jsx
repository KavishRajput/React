import { Cardsection } from "./Components/Cardsection"

export default function App() { 
  

  return (
    <>
    <div className="Cardsection">
    {
      filterdata.products.map((item,index)=>{
        return (
          <Cardsection data={item} key={index}/>

        )

      })
    }
    </div>
    </>
  )
}