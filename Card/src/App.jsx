import { Fragment } from "react";

import { Ecom_card } from "./Components/ecom_card";
function App () {

  let array=[
    {
        product_name:"T-Shirt For Men",
        product_img:"",
        product_category:"Men Fashion",
        product_price:100,
    },
    {
        product_name:"T-Shirt For Women",
        product_img:"",
        product_category:"Women Fashion",
        product_price:200,
    },
    {
        product_name:"Watch",
        product_img:"",
        product_category:"Fashion",
        product_price:599,
    }
]

  return (
    
    <Fragment>
      <div>
        <Ecom_card data={array[0]}/>
        <Ecom_card data={array[1]}/>
        <Ecom_card data={array[2]}/>
      </div>
    </Fragment>
  )
}
export default App;