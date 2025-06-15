const root = document.getElementById('root')

const App = () => {
    const myItem = "I like Mike Dane's tutorials."
    return (
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>)
}

ReactDOM.render(<App />, root)

