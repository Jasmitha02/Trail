import "./style.css";
function F1(){
    const myStyle = {
        color: "blue",
        backgroundColor: "pink"
    }
    return(
        <div>
            <h1 style = {{color:"red"}}>Inline style</h1>
            <h1 style = {myStyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
            <h1 class="text-danger bg-light">Bootstarp style</h1>
        </div>
    )
}
export default F1;