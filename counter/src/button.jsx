import react from "react"
import reactdom from "react-dom"

function Button(props)
{
    var [isover,setstate]=react.useState(false);
function over()
{
    setstate(true)
    console.log(over);
}
function out()
{
    setstate(false)
}
    return <button className={props.className} onClick={props.fun} style={{isover}?{backgroundColor:"black"}:{backgroundColor:"#34495e"}} onMouseOver={over} onMouseOut={out} >{props.text}</button>
}
export default Button
