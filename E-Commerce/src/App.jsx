import { Cardsection } from "./Components/Cardsection"
import { Loader } from "./Components/Loader"
import { array } from "./data"
import { Link } from "react-router-dom"

export default function App() { 
  

  return (
    <>
    <div className="Cardsection">
    {
      (array.products.length==0)?<Loader />:
      array.products?.map((item,index)=>{
        return (
          // <Link to={`/product/${item.title.split(" ").join("_")}`} key={item.id}>
          <Link to={`/product/${item.id}`} key={item.id}>
          <Cardsection data={item} key={index}/>  
          </Link>

        )

      })
    }
    </div>
    </>
  )
}