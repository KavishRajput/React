import '../App.css'
import { Navsearchbar } from './Inputboxs'
import { Logo } from './Logos'
import { Navlist } from './Navlist'
import '../data.js'
import { array } from '../data.js'
export const Header=()=>{


  const searchdata=(Search_string)=>{
    const filtercard = array.products.filter((prod)=>{
      return(
        prod.title.toLowerCase().includes(Search_string.toLowerCase())
      )
    })
    console.log(filtercard)
  }

    
    const container={
        display:'flex',
        justifyContent:'space-around',
        alignItems:"center",
        height:'70px',
        width:'100vw',
        backgroundColor:"var(--primary-color)",
        paddingBlock:"10px"
    }
    return(
        <>
        <div style={container}>
            <Logo />
            <Navsearchbar searchdata={searchdata}/>
            <Navlist />
        </div>
        </>
    )
}