import react,{useState} from "react"
import reactdom from "react-dom"
import Button from "./button"

function App()
{   
    var [isover,setover]=useState(false)
    var [state,setstate]=useState(0)
    function over()
    {
        setover(true)
    }
    function out()
    {
        setover(false)
    }
function add()
{
    setstate(state+1)
}
function sub()
{
    setstate(state-1)
}
    return <div id="main">
        <p className="text">{state}</p>
        <div id="button">
        <button className="button" onMouseOver={over} onMouseOut={out}
         style={{backgroundColor:isover?"black":"#8e44ad"}} onClick={add}>+</button>
         <button className="button" onMouseOver={over} onMouseOut={out}
         style={{backgroundColor:isover?"black":"#8e44ad"}} onClick={sub}>-</button></div>
    </div>
}

export default App