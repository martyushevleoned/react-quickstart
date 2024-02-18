// ReactDOM.render(React.createElement( 'input', {
//     placeholder: "help text",
//     onClick: () => console.log("Clicked")
// }), document.getElementById("app"))

const someText = "help text"
const inputClick = ()  => console.log("clicked")
const mouseOver = () => console.log("mouse over")

const app = document.getElementById("app")
const elements = <input 
        className="input"
        placeholder={someText}
        onClick={inputClick} 
        onMouseOver={mouseOver}>
    </input>

ReactDOM.render(elements, app)