const root = ReactDOM.createRoot(document.getElementById('root'))

// const myItem = "mike"

const App = () => {
    const myItem = "mike"
    return (
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>)
}

// const myJSXElement = (
//     <ul>
//         <li>Item1</li>
//         <li>Item2</li>
//         <li>{myItem}</li>
//     </ul>
// // )
// ReactDOM.render(myJSXElement, reactContentRoot)

ReactDOM.render(<App />, root)
