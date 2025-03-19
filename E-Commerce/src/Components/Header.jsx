import '../App.css'
import { Navsearchbar } from './Inputboxs'
import { Logo } from './Logos'
import { Navlist } from './Navlist'
export const Header=()=>{
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
            <Navsearchbar />
            <Navlist />
        </div>
        </>
    )
}