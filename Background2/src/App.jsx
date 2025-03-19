import { Colorpicker } from "./Components/Colorpicker";
import './App.css';

export default function App(){
  return (
    <>
    <div className="wrapper">
    <Colorpicker col="red"/>
    <Colorpicker col="blue"/>
    <Colorpicker col="green"/>
    <Colorpicker col="yellow "/>
    </div>
    </>
  )
}