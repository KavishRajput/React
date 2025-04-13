// export function useSearchBar(products,setFilterdata){
//     const searchdata=(Search_string)=>{
//         const filtercard = products.filter((prod)=>{
//           return(
//             prod.title.toLowerCase().includes(Search_string.toLowerCase())
//           )
//         })
//           setFilterdata(filtercard)
//       }
//       return searchdata
// }


export const searchData=(productslist,searchstring)=>{
  const filprod=productslist.filter((res)=>{
      return(res.title.toLowerCase().includes(searchstring.toLowerCase()))
  })
  console.log(filprod)
 return filprod
}